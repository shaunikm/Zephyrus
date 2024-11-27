import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Earth } from './Earth';

const ThreeDScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <ambientLight intensity={1.5} /> {/* Increased from 0.5 */}
      <pointLight position={[10, 10, 10]} intensity={2.0} /> {/* Added intensity */}
      <directionalLight position={[5, 3, 5]} intensity={1.0} /> {/* Added directional light */}
      <Earth />
      <OrbitControls enableZoom={true} />
      <Stars />
    </Canvas>
  );
};

export default ThreeDScene;