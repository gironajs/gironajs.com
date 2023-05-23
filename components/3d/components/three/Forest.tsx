import { Sparkles } from '@react-three/drei';

export default function Forest() {
  return (
    <Sparkles
      count={5000}
      scale={[8, 0.01, 3]}
      size={2}
      speed={0.1}
      noise={100}
      position={[-2, 0.3, -3.5]}
      rotation={[0, 0.4, 0]}
      color={'#219c40'}
    />
  );
}
