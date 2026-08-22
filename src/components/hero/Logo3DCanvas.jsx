import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * DAOVOS 3D Extruded Logo Engine
 * High-precision WebGL extruded 6-module emblem using Three.js.
 * Features:
 * - Direct mathematical extrusion of the 6 canonical rectangular modules
 * - Chamfered architectural bevels
 * - Dark Titanium / Obsidian PBR material with metallic sheen
 * - Studio key/fill/rim lighting setup
 * - Mouse parallax tilt & smooth harmonic levitation
 */
export const Logo3DCanvas = ({ className = '', style = {} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 480);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 6-Module Logo Group
    const logoGroup = new THREE.Group();
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
      depth: 32,
      bevelEnabled: true,
      bevelThickness: 3.5,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 4
    };

    // Dark Titanium / Architectural Obsidian Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x18181b,
      emissive: 0x050508,
      roughness: 0.28,
      metalness: 0.92,
      clearcoat: 0.6,
      clearcoatRoughness: 0.18,
      reflectivity: 0.9,
      specularColor: new THREE.Color(0xf4eee8)
    });

    const datumX = 511.5;
    const datumY = 408.0;

    modules.forEach((mod) => {
      const shape = new THREE.Shape();
      const x0 = mod.x - datumX;
      const y0 = -(mod.y - datumY); // Invert Y for 3D coordinate space
      const w = mod.w;
      const h = mod.h;

      // Draw rectangle path
      shape.moveTo(x0, y0);
      shape.lineTo(x0 + w, y0);
      shape.lineTo(x0 + w, y0 - h);
      shape.lineTo(x0, y0 - h);
      shape.closePath();

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center(); // Center individual module or keep aligned
      
      // Calculate real offset relative to datum
      const mesh = new THREE.Mesh(geometry, material);
      const posX = (x0 + w / 2);
      const posY = (y0 - h / 2);
      mesh.position.set(posX, posY, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      logoGroup.add(mesh);
    });

    // Lighting Setup
    // Key Light (Warm architectural white)
    const keyLight = new THREE.DirectionalLight(0xfff2e6, 3.8);
    keyLight.position.set(120, 180, 260);
    scene.add(keyLight);

    // Rim / Backlight (Cool silver edge light)
    const rimLight = new THREE.DirectionalLight(0xccddff, 4.5);
    rimLight.position.set(-180, -120, -180);
    scene.add(rimLight);

    // Top Specular Light
    const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
    topLight.position.set(0, 300, 100);
    scene.add(topLight);

    // Subtle Front Fill Light
    const fillLight = new THREE.PointLight(0xf4eee8, 1.8, 800);
    fillLight.position.set(0, 0, 300);
    scene.add(fillLight);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a1f, 1.2);
    scene.add(ambientLight);

    // Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.12; // Slight default dynamic tilt
    let targetRotationY = -0.22;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.85;
      targetRotationX = -y * 0.65;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating levitation oscillation
      logoGroup.position.y = Math.sin(elapsedTime * 1.4) * 8;
      logoGroup.position.z = Math.cos(elapsedTime * 1.1) * 6;

      // Smooth damped rotation towards mouse position + harmonic sway
      logoGroup.rotation.x += (targetRotationX + Math.sin(elapsedTime * 0.8) * 0.04 - logoGroup.rotation.x) * 0.06;
      logoGroup.rotation.y += (targetRotationY + Math.cos(elapsedTime * 0.7) * 0.06 - logoGroup.rotation.y) * 0.06;
      logoGroup.rotation.z = -logoGroup.rotation.y * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`daovos-3d-logo-canvas ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '480px',
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
