import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MAX_TRAIL = 16;

/**
 * DAOVOS High-Fidelity Living Fluid Dynamics Engine
 * Features:
 * - Multi-octave Curl Noise & Divergence-Free Vortices (Zero diagonal sliding; full 360° swirling organic turbulence)
 * - Multi-layer fluid depth with volumetric surface normals and specular ivory rim-lighting
 * - Interactive Dynamic Wake & Swirl: Mouse movement injects rotational velocity and fluid eddies that dissipate naturally
 * - Click Impulse: Radial shockwave that reverberates across the fluid surface
 * - Ultra-fine luxury static film grain & velvety architectural color grading
 */
export const AnimatedShaderBackground = ({
  className = '',
  style = {},
  speed = 0.55
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec2 uMouseVel;
      uniform vec4 uTrail[${MAX_TRAIL}]; // xy = pos, z = age, w = intensity
      uniform vec3 uImpulse; // xy = pos, z = age
      varying vec2 vUv;

      // Precision Simplex Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m * m;
        m = m * m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Curl Noise for natural rotational fluid swirling (Divergence-free)
      vec2 curlNoise(vec2 p, float t) {
        float eps = 0.008;
        float n1 = snoise(p + vec2(eps, 0.0) + vec2(cos(t * 0.3), sin(t * 0.3)) * 0.4);
        float n2 = snoise(p - vec2(eps, 0.0) + vec2(cos(t * 0.3), sin(t * 0.3)) * 0.4);
        float n3 = snoise(p + vec2(0.0, eps) + vec2(sin(t * 0.3), cos(t * 0.3)) * 0.4);
        float n4 = snoise(p - vec2(0.0, eps) + vec2(sin(t * 0.3), cos(t * 0.3)) * 0.4);
        float dy = (n3 - n4) / (2.0 * eps);
        float dx = (n1 - n2) / (2.0 * eps);
        return vec2(dy, -dx);
      }

      // Multi-Octave Organic FBM
      float fluidFBM(vec2 p, float t) {
        float total = 0.0;
        float amp = 0.55;
        float freq = 1.0;
        for (int i = 0; i < 4; i++) {
          vec2 flow = curlNoise(p * freq * 0.5, t * (0.8 + float(i) * 0.3));
          total += snoise(p * freq + flow * 0.7) * amp;
          freq *= 2.05;
          amp *= 0.48;
        }
        return total;
      }

      // Static film grain
      float staticGrain(vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = vUv;
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
        vec2 p = (uv - 0.5) * aspect * 1.1;

        float t = uTime * 0.35;

        // 1. Compute Interactive Pointer Wake & Eddy Vortices
        vec2 pointerDistortion = vec2(0.0);
        float trailEnergy = 0.0;

        for (int i = 0; i < ${MAX_TRAIL}; i++) {
          vec4 tr = uTrail[i];
          float age = tr.z;
          float intensity = tr.w;
          if (age > 0.0 && age < 2.5) {
            vec2 center = (tr.xy - 0.5) * aspect * 1.1;
            vec2 delta = p - center;
            float dist = length(delta);
            float life = 1.0 - (age / 2.5);
            float radius = 0.22 + age * 0.12;

            if (dist < radius) {
              float falloff = exp(-dist * dist * 35.0) * life * intensity;
              // Swirling vortex eddy
              vec2 swirl = vec2(-delta.y, delta.x) / (dist + 0.02);
              pointerDistortion += swirl * falloff * 0.42;
              trailEnergy += falloff;
            }
          }
        }

        // 2. Click Shockwave Wavefront
        if (uImpulse.z > 0.0 && uImpulse.z < 2.0) {
          vec2 impCenter = (uImpulse.xy - 0.5) * aspect * 1.1;
          float impDist = length(p - impCenter);
          float ringRadius = uImpulse.z * 0.65;
          float ringDiff = abs(impDist - ringRadius);
          if (ringDiff < 0.15) {
            float ringFade = (1.0 - uImpulse.z / 2.0);
            float wave = cos(ringDiff * 38.0) * exp(-ringDiff * ringDiff * 80.0) * ringFade;
            vec2 pushDir = normalize(p - impCenter + vec2(0.0001));
            pointerDistortion += pushDir * wave * 0.28;
            trailEnergy += wave * ringFade * 0.5;
          }
        }

        // 3. Ambient Pointer Parallax Drift & Real-Time Velocity Swirl
        vec2 mouseCoord = (uMouse - 0.5) * aspect * 1.1;
        float mDist = length(p - mouseCoord);
        float mField = exp(-mDist * mDist * 12.0);
        pointerDistortion += uMouseVel * mField * 0.35;

        // Apply interactive disturbance to space
        vec2 warpedP = p + pointerDistortion;

        // 4. Living 360-Degree Fluid Domain Warping
        vec2 c1 = curlNoise(warpedP * 1.2, t * 0.8);
        vec2 q = vec2(
          fluidFBM(warpedP + c1 * 0.6 + vec2(0.0, 0.0), t * 0.6),
          fluidFBM(warpedP + c1 * 0.6 + vec2(5.2, 1.3), t * 0.7)
        );

        vec2 c2 = curlNoise(warpedP * 1.8 + q * 1.2, t * 1.1);
        vec2 r = vec2(
          fluidFBM(warpedP + 1.6 * q + c2 * 0.4 + vec2(1.7, 9.2), t * 0.9),
          fluidFBM(warpedP + 1.6 * q + c2 * 0.4 + vec2(8.3, 2.8), t * 0.8)
        );

        float f = fluidFBM(warpedP + 2.2 * r, t * 1.0);

        // 5. Volumetric Surface Normal Calculation for Tangible Liquid Depth
        float eps = 0.015;
        float fRight = fluidFBM(warpedP + 2.2 * r + vec2(eps, 0.0), t);
        float fUp    = fluidFBM(warpedP + 2.2 * r + vec2(0.0, eps), t);
        vec3 normal = normalize(vec3((f - fRight) / eps * 1.8, (f - fUp) / eps * 1.8, 1.0));
        vec3 lightDir = normalize(vec3(-0.35, 0.55, 0.85));
        float diffuse = clamp(dot(normal, lightDir), 0.0, 1.0);
        float specular = pow(clamp(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 16.0);

        // 6. DAOVOS Canonical Architectural Palette Grading
        vec3 cDeepVoid   = vec3(0.035, 0.035, 0.042);  // #09090B
        vec3 cCharcoal   = vec3(0.070, 0.070, 0.082);  // #121215
        vec3 cSlate      = vec3(0.135, 0.130, 0.145);  // #222125
        vec3 cWarmStone  = vec3(0.320, 0.295, 0.275);  // #524B46 (Warm Stone undertone)
        vec3 cIvoryCream = vec3(0.680, 0.640, 0.600);  // #EDE6DF softened
        vec3 cSpecular   = vec3(0.930, 0.900, 0.870);  // #EDE6DF specular highlight

        // Balanced fluid blending with rich volumetric contours
        float w1 = smoothstep(-0.6, 0.0, f);
        float w2 = smoothstep(-0.1, 0.5, length(q));
        float w3 = smoothstep(0.2, 0.85, length(r.x));
        float w4 = smoothstep(0.5, 1.1, f + 0.35 * r.y);

        vec3 color = cDeepVoid;
        color = mix(color, cCharcoal, w1 * 0.95);
        color = mix(color, cSlate, w2 * 0.80);
        color = mix(color, cWarmStone, w3 * 0.65);
        color = mix(color, cIvoryCream, w4 * 0.42);

        // Modulate with volumetric lighting & specular sheen
        color *= (0.75 + 0.35 * diffuse);
        color += cSpecular * specular * 0.24;

        // Interactive Wake Luminescence
        color += cIvoryCream * trailEnergy * 0.28;

        // 7. Radial Vignette & Edge Feathering
        float radial = length(uv - vec2(0.5, 0.5));
        float vignette = smoothstep(0.92, 0.15, radial);
        color *= (0.65 + 0.35 * vignette);

        // 8. Fine Luxury Static Film Grain
        float grain = (staticGrain(gl_FragCoord.xy) - 0.5) * 0.026;
        color += grain;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Initialize Trail Uniforms
    const trailUniforms = [];
    for (let i = 0; i < MAX_TRAIL; i++) {
      trailUniforms.push(new THREE.Vector4(0.5, 0.5, -1.0, 0.0));
    }

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseVel: { value: new THREE.Vector2(0.0, 0.0) },
      uTrail: { value: trailUniforms },
      uImpulse: { value: new THREE.Vector3(0.5, 0.5, -1.0) }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    // Trail State Ring Buffer
    const trail = Array.from({ length: MAX_TRAIL }, () => ({
      x: 0.5,
      y: 0.5,
      age: -1.0,
      intensity: 0.0
    }));
    let trailHead = 0;

    const spawnTrailNode = (nx, ny, intensity = 1.0) => {
      const node = trail[trailHead];
      node.x = nx;
      node.y = ny;
      node.age = 0.001;
      node.intensity = intensity;
      trailHead = (trailHead + 1) % MAX_TRAIL;
    };

    let impulse = { x: 0.5, y: 0.5, age: -1.0 };

    // Mouse Tracking & Dynamic Eddy Injection
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;
    let lastSpawnX = 0;
    let lastSpawnY = 0;
    let velX = 0;
    let velY = 0;

    const handlePointerMove = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = 1.0 - (e.clientY / window.innerHeight);

      velX = (nx - targetMouseX) * 4.0;
      velY = (ny - targetMouseY) * 4.0;

      targetMouseX = nx;
      targetMouseY = ny;

      // Spawn trail eddy when mouse moves
      const dx = e.clientX - lastSpawnX;
      const dy = e.clientY - lastSpawnY;
      const dist = Math.hypot(dx, dy);

      if (dist > 18) {
        const speedFactor = Math.min(dist / 35.0, 2.0);
        spawnTrailNode(nx, ny, speedFactor);
        lastSpawnX = e.clientX;
        lastSpawnY = e.clientY;
      }
    };

    const handlePointerDown = (e) => {
      const nx = e.clientX / window.innerWidth;
      const ny = 1.0 - (e.clientY / window.innerHeight);
      impulse.x = nx;
      impulse.y = ny;
      impulse.age = 0.001; // Trigger click shockwave pulse
      spawnTrailNode(nx, ny, 2.5);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      uniforms.uResolution.value.set(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Fluid mouse lerp & velocity decay
      currentMouseX += (targetMouseX - currentMouseX) * 0.07;
      currentMouseY += (targetMouseY - currentMouseY) * 0.07;
      velX *= 0.91;
      velY *= 0.91;

      uniforms.uTime.value = elapsedTime * speed;
      uniforms.uMouse.value.set(currentMouseX, currentMouseY);
      uniforms.uMouseVel.value.set(velX, velY);

      // Update Trail Eddies
      for (let i = 0; i < MAX_TRAIL; i++) {
        const node = trail[i];
        if (node.age >= 0.0) {
          node.age += delta * 1.25;
          if (node.age > 2.5) {
            node.age = -1.0;
          }
        }
        uniforms.uTrail.value[i].set(node.x, node.y, node.age, node.intensity);
      }

      // Update Impulse
      if (impulse.age >= 0.0) {
        impulse.age += delta * 1.5;
        if (impulse.age > 2.0) {
          impulse.age = -1.0;
        }
      }
      uniforms.uImpulse.value.set(impulse.x, impulse.y, impulse.age);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`daovos-animated-shader-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        filter: 'blur(3px)',
        transform: 'scale(1.02)',
        ...style
      }}
    />
  );
};

export default AnimatedShaderBackground;
