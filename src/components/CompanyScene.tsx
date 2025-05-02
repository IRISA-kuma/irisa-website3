'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 5 + Math.random() * 10;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#1E88E5"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef} scale={[2, 2, 2]}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshTransmissionMaterial
        backside
        backsideThickness={1}
        thickness={0.5}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.1}
        anisotropy={1}
        transparent
        opacity={0.9}
        clearcoat={1}
        clearcoatRoughness={0.2}
        color="#ffffff"
      />
    </mesh>
  );
};

const CompanyTitle = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={[0, 0, 0]}
    >
      <Text
        fontSize={1.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
        font="/fonts/Inter-Bold.woff"
      >
        IRISA
      </Text>
    </Float>
  );
};

export const CompanyScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 10, 50]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <ParticleField />
        <AnimatedSphere />
        <CompanyTitle />
        
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.5}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
