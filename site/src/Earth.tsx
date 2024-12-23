import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const earthTexture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
  
  // Create higher resolution dotted texture
  const texture = new THREE.DataTexture(
    new Uint8Array(1024 * 1024 * 3).map(() => Math.random() > 0.985 ? 255 : 0),
    1024,
    1024,
    THREE.RGBFormat
  );
  texture.needsUpdate = true;

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[0.35, 12, 12]} />
      <meshStandardMaterial
        color="#81C784"
        flatShading={true}
        metalness={0.1}
        roughness={0.8}
      />
    </mesh>
  );
}