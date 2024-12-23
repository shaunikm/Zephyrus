import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Earth } from './Earth';

const ThreeDScene: React.FC = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 2.2], fov: 45 }}
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%) scale(0.8)',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.0} />
      <Earth />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeDScene;