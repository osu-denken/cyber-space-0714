import { useFrame } from '@react-three/fiber';

function AnimatedScene() {
  useFrame((state, delta) => {
    state.camera.position.z -= 0.01;
  });
  return null;
}

export default AnimatedScene;