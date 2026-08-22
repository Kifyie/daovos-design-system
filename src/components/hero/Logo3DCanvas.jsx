import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * DAOVOS 3D Extruded Logo Engine
 * High-precision WebGL extruded 6-module emblem using Three.js.
 * Features:
 * - Mathematical extrusion of the 6 canonical rectangular modules
 * - Scaled to balanced proportions
 * - Chamfered architectural bevels
 * - Brushed Titanium & Obsidian metallic PBR material
 * - Multi-point studio lighting with high-contrast specular reflections
 * - Mouse parallax tilt & smooth harmonic levitation
 */
export const Logo3DCanvas = ({ className = '', style = {}, scale = 0.68 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 1000);
    camera.position.set(0, 0, 520);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 6-Module Logo Group
    const logoGroup = new THREE.Group();
    logoGroup.scale.set(scale, scale, scale); // Scale the 3D logo appropriately
    scene.add(logoGroup);

    // Canonical module definitions (x, y, width, height in SVG coordinates relative to datum [511.5, 408])
    const modules = [
      { x: 478.50, y: 240.80, w: 66.30, h: 162.70 }, // 1: Center Top
      { x: 380.50, y: 322.50, w: 63.80, h: 81.00  }, // 2: Left Top
      { x: 578.70, y: 322.50, w: 63.80, h: 81.00  }, // 3: Right Top
      { x: 380.50, y: 419.20, w: 63.80, h: 77.90  }, // 4: Left Bottom
      { x: 478.50, y: 419.20, w: 66.30, h: 156.00 }, // 5: Center Bottom
      { x: 578.70, y: 419.20, w: 63.80, h: 77.90  }  // 6: Right Bottom
    ];

    const extrudeSettings = {
      steps: 1,
      depth: 38,
      bevelEnabled: true,
      bevelThickness: 4.5,
      bevelSize: 3.2,
      bevelOffset: 0,
      bevelSegments: 5
    };

    // Refined Brushed Titanium / Obsidian Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x3a3a44,
      emissive: 0x08080c,
      roughness: 0.2,
      metalness: 0.9,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.98,
      specularColor: new THREE.Color(0xffffff)
    });

    const datumX = 511.5;
    const datumY = 408.0;

    modules.forEach((mod) => {
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

      const mesh = new THREE.Mesh(geometry, material);
      const posX = x0 + w / 2;
      const posY = y0 - h / 2;
      mesh.position.set(posX, posY, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      logoGroup.add(mesh);
    });

    // Multi-Point Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xfff6ed, 4.8);
    keyLight.position.set(160, 220, 300);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xb0c8ff, 6.5);
    rimLight.position.set(-220, -160, -200);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 4.0);
    topLight.position.set(0, 350, 140);
    scene.add(topLight);

    const fillLight = new THREE.PointLight(0xf4eee8, 2.8, 900);
    fillLight.position.set(0, 40, 360);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x282832, 1.5);
    scene.add(ambientLight);

    let targetRotationX = 0.12;
    let targetRotationY = -0.22;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.95;
      targetRotationX = -y * 0.75;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      logoGroup.position.y = Math.sin(elapsedTime * 1.5) * 6;
      logoGroup.position.z = Math.cos(elapsedTime * 1.2) * 4;

      logoGroup.rotation.x += (targetRotationX + Math.sin(elapsedTime * 0.8) * 0.035 - logoGroup.rotation.x) * 0.07;
      logoGroup.rotation.y += (targetRotationY + Math.cos(elapsedTime * 0.7) * 0.045 - logoGroup.rotation.y) * 0.07;
      logoGroup.rotation.z = -logoGroup.rotation.y * 0.18;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
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
        ...style
      }}
    />
  );
};

export default Logo3DCanvas;
