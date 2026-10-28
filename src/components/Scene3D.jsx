import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import SceneFallback from './SceneFallback';

// Central 3D Core: Metallic Geodesic Sphere + Orbital Rings
function FuturisticCore({ isMobile }) {
  const meshRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    // Smooth rotation and subtle mouse reactivity
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + pointerY * 0.3;
      meshRef.current.rotation.y = t * 0.2 + pointerX * 0.4;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.25;
      innerRef.current.rotation.z = t * 0.2;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.15 + pointerY * 0.2;
      ring1Ref.current.rotation.y = t * 0.35 + pointerX * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.4) * 0.15;
      ring2Ref.current.rotation.z = -t * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Faceted Metallic Geodesic Polyhedron */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshStandardMaterial
          color="#101826"
          metalness={0.9}
          roughness={0.15}
          wireframe={false}
          flatShading={true}
        />
      </mesh>

      {/* Wireframe Outline for High-Tech Edge Definition */}
      <mesh rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1.76, 1]} />
        <meshBasicMaterial
          color="#00E5FF"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glowing Energy Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Orbital Cyber Ring 1 (Cyan) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Orbital Cyber Ring 2 (Violet) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.85, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.0}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Floating Sparkle Particles around the core */}
      <Sparkles
        count={isMobile ? 35 : 70}
        scale={6}
        size={isMobile ? 2 : 2.8}
        speed={0.4}
        color="#00E5FF"
      />
      <Sparkles
        count={isMobile ? 25 : 50}
        scale={5.5}
        size={isMobile ? 1.5 : 2.2}
        speed={0.3}
        color="#8B5CF6"
      />
    </group>
  );
}


export default function Scene3D() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect WebGL capability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }

    // Check device screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL) {
    return <SceneFallback />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, isMobile ? 1.5 : 2]}
        >
          {/* Ambient & Directed Luxury Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
          <pointLight position={[-6, -4, -3]} color="#8B5CF6" intensity={3.5} distance={15} />
          <pointLight position={[6, 4, 3]} color="#00E5FF" intensity={3.0} distance={15} />
          <pointLight position={[0, -5, 2]} color="#00E5FF" intensity={1.5} distance={10} />

          {/* Floating animated 3D structure */}
          <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
            <FuturisticCore isMobile={isMobile} />
          </Float>
        </Canvas>
      </Suspense>
    </div>
  );
}
