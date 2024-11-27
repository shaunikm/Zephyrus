import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDScene: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={new THREE.TextureLoader().load('/earth.jpg')} />
      </mesh>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
};

export default ThreeDScene;