import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * Custom GLSL Vertex Shader for DAOVOS 3D Collision Engine
 * Passes screen-space pixel position for 100% uniform mask calculations
 */
const collisionVertexShader = `
  varying vec3 vLocalPos;
  varying vec3 vModelPos;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec2 vScreenPos;

  uniform vec3 uMeshOffset;
  uniform vec2 uResolution;

  void main() {
    vLocalPos = position;
    vModelPos = position + uMeshOffset;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vec4 clipPos = projectionMatrix * viewMatrix * worldPosition;
    vScreenPos = (clipPos.xy / clipPos.w * 0.5 + 0.5) * uResolution;
    gl_Position = clipPos;
  }
`;

/**
 * Custom GLSL Fragment Shader for DAOVOS 3D Collision Engine
 * - Seamless 3D Voronoi Cellular Framework with physical PBR metallic shading
 * - Final Monolith + Focused Spotlight Hybrid Mask Engine
 */
const collisionFragmentShader = `
  precision highp float;

  varying vec3 vLocalPos;
  varying vec3 vModelPos;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec2 vScreenPos;

  uniform vec2 uMousePixelPos;
  uniform vec2 uResolution;
  uniform float uGlobalHover;
  uniform float uBlockHover;
  uniform float uTime;
  uniform vec3 uCameraPos;

  // Studio Lights
  uniform vec3 uKeyLightDir;
  uniform vec3 uKeyLightColor;
  uniform vec3 uRimLightDir;
  uniform vec3 uRimLightColor;
  uniform vec3 uTopLightDir;
  uniform vec3 uTopLightColor;
  uniform vec3 uBottomLightDir;
  uniform vec3 uBottomLightColor;
  uniform vec3 uFillLightPos;
  uniform vec3 uFillLightColor;
  uniform vec3 uAmbientColor;

  // 3D Hash Function
  vec3 hash3(vec3 p) {
    p = vec3(
      dot(p, vec3(127.1, 311.7, 74.7)),
      dot(p, vec3(269.5, 183.3, 246.1)),
      dot(p, vec3(113.5, 271.9, 124.6))
    );
    return fract(sin(p) * 43758.5453123);
  }

  // Continuous 3D Voronoi Cell Boundary Distance Function
  float voronoi3D(vec3 p) {
    vec3 n = floor(p);
    vec3 f = fract(p);

    vec3 mg, mr;
    float md = 8.0;

    // 1st Pass: Find closest cell center
    for (int k = -1; k <= 1; k++) {
      for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
          vec3 g = vec3(float(i), float(j), float(k));
          vec3 o = hash3(n + g);
          vec3 r = g + o - f;
          float d = dot(r, r);
          if (d < md) {
            md = d;
            mr = r;
            mg = g;
          }
        }
      }
    }

    // 2nd Pass: Find distance to cell borders
    md = 8.0;
    for (int k = -1; k <= 1; k++) {
      for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
          vec3 g = mg + vec3(float(i), float(j), float(k));
          vec3 o = hash3(n + g);
          vec3 r = g + o - f;
          if (dot(mr - r, mr - r) > 0.00001) {
            float d = dot(0.5 * (mr + r), normalize(r - mr));
            md = min(md, d);
          }
        }
      }
    }
    return md;
  }

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 V = normalize(uCameraPos - vWorldPos);

    // 1. Studio Lighting on Solid Metallic Surface
    vec3 baseGraphite = vec3(0.075, 0.075, 0.085);
    vec3 diffuseColor = baseGraphite;
    float roughness = 0.20;
    float shininess = 52.0;
    vec3 boneWhite = vec3(0.929, 0.902, 0.875); // Canonical DAOVOS Bone White (#EDE6DF)

    vec3 solidLight = uAmbientColor * diffuseColor * 1.5;

    // A. Key Light
    vec3 L1 = normalize(uKeyLightDir);
    vec3 H1 = normalize(L1 + V);
    float NdotL1 = max(dot(N, L1), 0.0);
    float NdotH1 = max(dot(N, H1), 0.0);
    float spec1 = pow(NdotH1, shininess) * (1.0 - roughness);
    solidLight += (diffuseColor * NdotL1 + boneWhite * spec1 * 1.8) * uKeyLightColor;

    // B. Rim Backlight
    vec3 L2 = normalize(uRimLightDir);
    vec3 H2 = normalize(L2 + V);
    float NdotL2 = max(dot(N, L2), 0.0);
    float NdotH2 = max(dot(N, H2), 0.0);
    float spec2 = pow(NdotH2, shininess * 0.8) * 1.4;
    solidLight += (diffuseColor * NdotL2 * 0.35 + boneWhite * spec2 * 2.4) * uRimLightColor;

    // C. Top Specular Glint Light
    vec3 L3 = normalize(uTopLightDir);
    vec3 H3 = normalize(L3 + V);
    float NdotL3 = max(dot(N, L3), 0.0);
    float NdotH3 = max(dot(N, H3), 0.0);
    float spec3 = pow(NdotH3, shininess) * (1.0 - roughness);
    solidLight += (diffuseColor * NdotL3 * 0.25 + boneWhite * spec3 * 1.6) * uTopLightColor;

    // D. Dedicated Bottom-Front Uplight
    vec3 L5 = normalize(uBottomLightDir);
    vec3 H5 = normalize(L5 + V);
    float NdotL5 = max(dot(N, L5), 0.0);
    float NdotH5 = max(dot(N, H5), 0.0);
    float spec5 = pow(NdotH5, shininess) * (1.0 - roughness);
    solidLight += (diffuseColor * NdotL5 * 0.55 + boneWhite * spec5 * 2.2) * uBottomLightColor;

    // E. Front Fill Light
    vec3 fillDir = uFillLightPos - vWorldPos;
    float fillDist = length(fillDir);
    vec3 L4 = normalize(fillDir);
    float fillAtten = clamp(1.0 - fillDist / 900.0, 0.0, 1.0);
    float NdotL4 = max(dot(N, L4), 0.0);
    solidLight += (diffuseColor * NdotL4 * 0.75) * uFillLightColor * fillAtten;

    // F. Fresnel Grazing Sheen
    float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    solidLight += boneWhite * fresnel * 0.55;

    // 2. Static 3D Voronoi Cellular Field (Seamless across all 3D faces)
    vec3 voronoiCoord = (vModelPos + vec3(500.0, 500.0, 500.0)) * 0.055;
    float borderDist = voronoi3D(voronoiCoord);

    // Refined Antialiased Cell Line Boundary (Thickness: ~0.024)
    float cellLineWidth = 0.024;
    float cellLine = 1.0 - smoothstep(0.004, cellLineWidth, borderDist);

    // Consistently Bright, Metallic Titanium / Bone White Line Shading
    vec3 lineMetallic = boneWhite * (1.9 + fresnel * 2.2);
    vec3 lineDiffuse = vec3(0.32, 0.32, 0.36);
    float combinedSpecs = spec1 * 2.5 + spec2 * 3.0 + spec3 * 2.0 + spec5 * 2.2;
    vec3 lineShaded = (lineDiffuse * (NdotL1 + NdotL5 * 0.6 + 0.35) + lineMetallic * combinedSpecs) * uKeyLightColor + uAmbientColor * lineDiffuse * 2.0 + boneWhite * (fresnel * 0.8 + 0.28);

    // Interior Cell: Smoked titanium glass with preserved metallic shine
    vec3 glassSpecular = (boneWhite * (spec1 * 1.8 + spec2 * 2.2 + spec3 * 1.4 + spec5 * 2.0) + boneWhite * fresnel * 0.85) * uKeyLightColor;
    vec3 interiorGlass = baseGraphite * 0.45 * (NdotL1 + NdotL5 * 0.5 + 0.25) + glassSpecular + uAmbientColor * baseGraphite * 0.8;

    vec3 voronoiColor = mix(interiorGlass, lineShaded, cellLine);
    // Semi-transparent smoked glass (alpha = 0.22), lines are solid (alpha = 0.98)
    float voronoiAlpha = mix(0.22, 0.98, cellLine);

    // 3. Final Monolith + Focused Spotlight Hybrid Mask Engine
    float pixelDist = distance(vScreenPos, uMousePixelPos);

    // A. Active block transitions smoothly into smoked crystalline glass
    float baseBlockMask = uBlockHover * 0.40;
    // B. Focused circular spotlight directly under the cursor within the active block
    float circleSpot = smoothstep(72.0, 20.0, pixelDist) * uBlockHover;
    float mask = clamp(baseBlockMask + circleSpot * 0.75, 0.0, 1.0) * max(uGlobalHover, uBlockHover);
    vec3 accentGlow = boneWhite * (cellLine * circleSpot * 1.4 + circleSpot * 0.35);

    // Seamless Blending between Solid Obsidian and Voronoi Glass Lattice
    vec3 finalColor = mix(solidLight, voronoiColor + accentGlow, mask);
    float finalAlpha = mix(1.0, voronoiAlpha, mask);

    gl_FragColor = vec4(finalColor, finalAlpha);
  }
`;

export const Logo3DCanvas = ({ className = '', style = {}, scale = 0.78, gateRef = null }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera (Expanded frustum with ample vertical headroom)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    camera.position.set(0, 0, 540);

    // 2. High-Performance Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Logo Group & Geometry Hierarchy
    const logoGroup = new THREE.Group();
    logoGroup.scale.set(scale, scale, scale);
    scene.add(logoGroup);

    const modules = [
      { id: 'center-top',    x: 478.50, y: 240.80, w: 66.30, h: 162.70 }, // 0
      { id: 'left-top',      x: 380.50, y: 322.50, w: 63.80, h: 81.00  }, // 1
      { id: 'right-top',     x: 578.70, y: 322.50, w: 63.80, h: 81.00  }, // 2
      { id: 'left-bottom',   x: 380.50, y: 419.20, w: 63.80, h: 77.90  }, // 3
      { id: 'center-bottom', x: 478.50, y: 419.20, w: 66.30, h: 156.00 }, // 4
      { id: 'right-bottom',  x: 578.70, y: 419.20, w: 63.80, h: 77.90  }  // 5
    ];

    const extrudeSettings = {
      steps: 2,
      depth: 34,
      bevelEnabled: true,
      bevelThickness: 3.8,
      bevelSize: 2.8,
      bevelOffset: 0,
      bevelSegments: 4
    };

    const datumX = 511.5;
    const datumY = 408.0;

    const meshes = [];

    const createShaderMaterial = (offsetVec) => {
      return new THREE.ShaderMaterial({
        vertexShader: collisionVertexShader,
        fragmentShader: collisionFragmentShader,
        transparent: true,
        depthWrite: true,
        uniforms: {
          uMeshOffset: { value: offsetVec },
          uResolution: { value: new THREE.Vector2(width, height) },
          uMousePixelPos: { value: new THREE.Vector2(-9999, -9999) },
          uGlobalHover: { value: 0.0 },
          uBlockHover: { value: 0.0 },
          uTime: { value: 0.0 },
          uCameraPos: { value: camera.position },
          uKeyLightDir: { value: new THREE.Vector3(160, 220, 280).normalize() },
          uKeyLightColor: { value: new THREE.Color(0xf4eee8).multiplyScalar(1.6) },
          uRimLightDir: { value: new THREE.Vector3(-220, -160, -180).normalize() },
          uRimLightColor: { value: new THREE.Color(0xffffff).multiplyScalar(2.2) },
          uTopLightDir: { value: new THREE.Vector3(0, 320, 120).normalize() },
          uTopLightColor: { value: new THREE.Color(0xffffff).multiplyScalar(1.4) },
          uBottomLightDir: { value: new THREE.Vector3(0, -260, 240).normalize() },
          uBottomLightColor: { value: new THREE.Color(0xf4eee8).multiplyScalar(1.6) },
          uFillLightPos: { value: new THREE.Vector3(0, 30, 340) },
          uFillLightColor: { value: new THREE.Color(0xaba6a1).multiplyScalar(1.1) },
          uAmbientColor: { value: new THREE.Color(0x14141a) }
        }
      });
    };

    modules.forEach((mod, index) => {
      const shape = new THREE.Shape();
      const x0 = mod.x - datumX;
      const y0 = -(mod.y - datumY);
      const w = mod.w;
      const h = mod.h;

      shape.moveTo(x0, y0);
      shape.lineTo(x0 + w, y0);
      shape.lineTo(x0 + w, y0 - h);
      shape.lineTo(x0, y0 - h);
      shape.closePath();

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();

      const posX = x0 + w / 2;
      const posY = y0 - h / 2;
      const offsetVec = new THREE.Vector3(posX, posY, 0);

      const material = createShaderMaterial(offsetVec);
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(posX, posY, 0);

      mesh.userData = {
        id: mod.id,
        index: index,
        basePos: new THREE.Vector3(posX, posY, 0),
        zOffset: 0,
        targetZOffset: 0,
        rotX: 0,
        rotY: 0,
        targetRotX: 0,
        targetRotY: 0,
        scale: 1.0,
        targetScale: 1.0,
        intensity: 0.0,
        targetIntensity: 0.0,
        phaseZ: index * 1.37 + 0.4,
        phaseRotX: index * 1.82 + 0.9,
        phaseRotY: index * 2.14 + 1.2,
        speedMult: 0.85 + (index % 3) * 0.22
      };

      logoGroup.add(mesh);
      meshes.push(mesh);
    });

    // 4. Exact Canvas Bounding Box Screen-to-3D Mapping Pipeline & Click-Wave Engine
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2(-999, -999);
    const mousePixelPos = new THREE.Vector2(-9999, -9999);
    const currentWorldHit = new THREE.Vector3(999, 999, 999);
    const planeHit = new THREE.Vector3();
    const logoCenterPos = new THREE.Vector3();
    const meshWorldPos = new THREE.Vector3();
    const tempLocalPos = new THREE.Vector3();
    const logoPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    let targetRotationX = 0.08;
    let targetRotationY = -0.14;

    let targetGlobalHover = 0.0;
    let currentGlobalHover = 0.0;
    let isPointerInside = false;

    // Origin-Based Radial Shockwave State (Spam-Proof)
    let clickWave = {
      active: false,
      originIndex: -1,
      startTime: -999,
      originPos: new THREE.Vector3()
    };
    let lastClickTime = 0;

    const handlePointerMove = (e) => {
      if (!container) return;
      isPointerInside = true;

      // Exact pixel-perfect NDC and screen-pixel conversion
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseNDC.x = (clientX / rect.width) * 2 - 1;
      mouseNDC.y = -(clientY / rect.height) * 2 + 1;

      // Invert Y for WebGL texture/pixel coordinates
      mousePixelPos.set(clientX, rect.height - clientY);

      targetRotationY = ((e.clientX / window.innerWidth) - 0.5) * 0.65;
      targetRotationX = -((e.clientY / window.innerHeight) - 0.5) * 0.45;
    };

    const handlePointerLeave = () => {
      isPointerInside = false;
      mouseNDC.set(-999, -999);
      mousePixelPos.set(-9999, -9999);
      targetGlobalHover = 0.0;
      targetRotationX = 0.08;
      targetRotationY = -0.14;
    };

    const handlePointerDown = (e) => {
      if (!container) return;
      const now = performance.now();
      // Spam-proof debounce threshold (160ms allows rapid rhythmic clicking without visual glitching)
      if (now - lastClickTime < 160) return;
      if (gateRef && (gateRef.current || 0) > 0.05) return; // gate transition owns the scene
      lastClickTime = now;

      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      const ndcX = (clientX / rect.width) * 2 - 1;
      const ndcY = -(clientY / rect.height) * 2 + 1;

      const clickRay = new THREE.Raycaster();
      clickRay.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
      const intersects = clickRay.intersectObjects(meshes, false);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const hitIndex = hitMesh.userData.index;

        clickWave = {
          active: true,
          originIndex: hitIndex,
          startTime: clock.getElapsedTime(),
          originPos: hitMesh.userData.basePos.clone()
        };
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      meshes.forEach((mesh) => {
        mesh.material.uniforms.uResolution.value.set(newWidth, newHeight);
      });
    };

    window.addEventListener('resize', handleResize);

    // 5. Unified Magnetic Field Physics with Origin-Based Click Shockwave
    let animationFrameId;
    const clock = new THREE.Clock();

    // ---- Gate choreography state (section-transition engine) ----
    // gateRef.current ∈ [0,1] is written externally by the scroll stage.
    // 0 = emblem intact; 1 = center-top block has become the WHO WE ARE monument.
    let gateSmooth = 0;
    const GATE_BLOCK_INDEX = 0; // center-top cuboid
    const scatterDirs = [
      { x: -0.92, y: -0.5, rz: -0.55 },  // left-top
      { x: 0.92, y: -0.5, rz: 0.55 },    // right-top
      { x: -1.0, y: 0.42, rz: -0.7 },    // left-bottom
      { x: 0.0, y: 1.0, rz: 0.25 },      // center-bottom
      { x: 1.0, y: 0.42, rz: 0.7 }       // right-bottom
    ];
    const smoothstep = (a, b, x) => {
      const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // ---- Gate progress smoothing + eased phases ----
      const gateTarget = gateRef ? Math.min(1, Math.max(0, gateRef.current || 0)) : 0;
      gateSmooth += (gateTarget - gateSmooth) * 0.075;
      const gAll = gateSmooth;                    // global damping factor
      const keep = 1 - gAll;                      // multiplier that fades hero motion out
      const eClear = smoothstep(0.04, 0.62, gAll);   // formation break-up
      const eGate = smoothstep(0.18, 0.96, gAll);    // monument approach

      // Architectural floating motion (damped out as the gate takes over)
      logoGroup.position.y = Math.sin(elapsedTime * 1.3) * 5 * keep;
      logoGroup.position.z = Math.cos(elapsedTime * 1.0) * 3.5 * keep;

      // Smooth damped parallax rotation (damps to rest pose so the monument faces camera)
      logoGroup.rotation.x += ((targetRotationX + Math.sin(elapsedTime * 0.7) * 0.02) * keep - logoGroup.rotation.x) * 0.055;
      logoGroup.rotation.y += ((targetRotationY + Math.cos(elapsedTime * 0.6) * 0.03) * keep - logoGroup.rotation.y) * 0.055;
      logoGroup.rotation.z = -logoGroup.rotation.y * 0.14;

      // Frame-by-frame 3D Raycasting with Continuous Interaction Plane
      scene.updateMatrixWorld(true);
      logoGroup.getWorldPosition(logoCenterPos);
      logoPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), logoCenterPos);

      if (isPointerInside && mouseNDC.x > -2 && gAll < 0.05) {
        raycaster.setFromCamera(mouseNDC, camera);

        if (raycaster.ray.intersectPlane(logoPlane, planeHit)) {
          currentWorldHit.copy(planeHit);
          targetGlobalHover = 1.0;
        }
      } else {
        targetGlobalHover = 0.0;
      }

      // Smooth Global Hover Transition
      currentGlobalHover += (targetGlobalHover - currentGlobalHover) * 0.15;

      // Update Individual Meshes with Organic Micro-Floating + Kinetic Monolith + Click Shockwave
      for (let m = 0; m < meshes.length; m++) {
        const mesh = meshes[m];
        const uData = mesh.userData;
        const uniforms = mesh.material.uniforms;

        uniforms.uTime.value = elapsedTime;
        uniforms.uCameraPos.value.copy(camera.position);
        uniforms.uMousePixelPos.value.copy(mousePixelPos);
        uniforms.uGlobalHover.value = currentGlobalHover;

        // Individual organic breathing/micro-floating motion
        const microFloatZ = Math.sin(elapsedTime * 1.1 * uData.speedMult + uData.phaseZ) * 2.6 + Math.cos(elapsedTime * 0.7 * uData.speedMult + uData.phaseRotX) * 1.4;
        const microFloatRotX = Math.sin(elapsedTime * 0.85 * uData.speedMult + uData.phaseRotX) * 0.018;
        const microFloatRotY = Math.cos(elapsedTime * 0.75 * uData.speedMult + uData.phaseRotY) * 0.022;

        // Calculate Origin-Based Radial Click Wave
        let waveZ = 0.0;
        let waveRotX = 0.0;
        let waveRotY = 0.0;
        let waveScale = 0.0;
        let waveIntensity = 0.0;

        if (clickWave.active) {
          const distFromOrigin = uData.basePos.distanceTo(clickWave.originPos);
          const delay = distFromOrigin * 0.0016; // Fast high-velocity shockwave propagation delay
          const timeSinceClick = elapsedTime - clickWave.startTime;
          const progress = (timeSinceClick - delay) / 0.44; // Snappy 0.44s wave duration

          if (progress >= 0.0 && progress <= 1.0) {
            const waveElev = Math.sin(progress * Math.PI);
            const isOrigin = (m === clickWave.originIndex);

            waveZ = Math.pow(waveElev, 1.2) * (isOrigin ? 82.0 : 64.0); // Monumental +82px / +64px forward wave extrusion
            waveRotX = Math.sin(progress * Math.PI * 2.0) * -0.075;

            // Punchy radial deflection away from the clicked block
            const dirX = uData.basePos.x - clickWave.originPos.x;
            const dirY = uData.basePos.y - clickWave.originPos.y;
            const len = Math.sqrt(dirX * dirX + dirY * dirY);
            if (len > 1.0) {
              waveRotX += -(dirY / len) * 0.085 * waveElev;
              waveRotY += (dirX / len) * 0.085 * waveElev;
            }

            waveScale = waveElev * (isOrigin ? 0.16 : 0.11); // 1.16x scale pop
            waveIntensity = Math.pow(waveElev, 1.4) * (isOrigin ? 1.0 : 0.85);
          } else if (timeSinceClick > 1.0) {
            clickWave.active = false;
          }
        }

        // Hover Kinetics
        let hoverRotX = 0.0;
        let hoverRotY = 0.0;
        let hoverZ = 0.0;
        let hoverScale = 0.0;
        let hoverIntensity = 0.0;

        if (targetGlobalHover > 0.01) {
          mesh.getWorldPosition(meshWorldPos);
          const distToHit = meshWorldPos.distanceTo(currentWorldHit);

          // Proximity weight: tighter radius (52.0) for punchy block isolation
          let weight = Math.exp(-(distToHit * distToHit) / (52.0 * 52.0));

          tempLocalPos.copy(currentWorldHit);
          mesh.worldToLocal(tempLocalPos);

          hoverRotX = -tempLocalPos.y * 0.0075 * weight;
          hoverRotY = tempLocalPos.x * 0.0075 * weight;
          hoverZ = 54.0 * weight; // Monumental +54px forward mechanical elevation
          hoverScale = 0.10 * weight; // 1.10x prominent scale expansion
          hoverIntensity = weight;
        }

        // Seamless Unified Target Blending
        uData.targetRotX = hoverRotX + waveRotX;
        uData.targetRotY = hoverRotY + waveRotY;
        uData.targetZOffset = Math.max(hoverZ, waveZ);
        uData.targetScale = 1.0 + Math.max(hoverScale, waveScale);
        uData.targetIntensity = Math.max(hoverIntensity, waveIntensity);

        // Crisp, Responsive Spring Damping
        uData.intensity += (uData.targetIntensity - uData.intensity) * 0.14;
        uniforms.uBlockHover.value = uData.intensity;

        // ---- Gate choreography ----
        const isGateBlock = m === GATE_BLOCK_INDEX;
        let gateX = 0;
        let gateY = 0;
        let gateZ = 0;
        let gateScaleMul = 1;
        let gateRotZ = 0;

        if (isGateBlock) {
          // Center-top cuboid becomes the WHO WE ARE monument:
          // recenters, advances toward camera, grows to monumental scale.
          gateX = -uData.basePos.x * eGate;
          gateY = -uData.basePos.y * eGate;
          gateZ = eGate * 110;
          gateScaleMul = 1 + eGate * 2.2;
        } else if (eClear > 0) {
          // Remaining blocks break formation and scatter into the void.
          const dir = scatterDirs[m > GATE_BLOCK_INDEX ? m - 1 : m];
          gateX = dir.x * eClear * 520;
          gateY = dir.y * eClear * 520;
          gateZ = -eClear * 750;
          gateRotZ = dir.rz * eClear;
          gateScaleMul = 1 - eClear * 0.25;
        }

        // Hero micro-motion fades as the monument takes the stage
        mesh.position.z = uData.basePos.z + uData.zOffset + microFloatZ * keep + gateZ;
        mesh.position.x = uData.basePos.x + gateX;
        mesh.position.y = uData.basePos.y + gateY;

        uData.rotX += (uData.targetRotX - uData.rotX) * 0.12;
        uData.rotY += (uData.targetRotY - uData.rotY) * 0.12;
        mesh.rotation.x = uData.rotX + microFloatRotX * keep;
        mesh.rotation.y = uData.rotY + microFloatRotY * keep;
        mesh.rotation.z = gateRotZ;

        uData.scale += (uData.targetScale - uData.scale) * 0.12;
        const outScale = uData.scale * gateScaleMul;
        mesh.scale.set(outScale, outScale, outScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scale]);

  return (
    <div
      ref={containerRef}
      className={`daovos-3d-logo-canvas ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        cursor: 'pointer',
        ...style
      }}
    />
  );
};

export default Logo3DCanvas;
