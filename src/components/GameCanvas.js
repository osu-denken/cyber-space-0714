import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedScene from "./AnimatedScene";

function GameCanvas() {
  const canvasRef = useRef();

  return (
    <Canvas ref={canvasRef} camera={{ position: [0, 0, 5], fov: 50 }}>
      <AnimatedScene />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default GameCanvas;