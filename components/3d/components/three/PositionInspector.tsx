import { GizmoHelper, GizmoViewport, PivotControls } from '@react-three/drei';

type Props = {
  onDragStartCb: () => void;
  onDragEndCb: () => void;
};

export default function PositionInspector({
  onDragStartCb,
  onDragEndCb,
}: Props) {
  // - Methods
  const onDragStart = () => {
    onDragStartCb();
  };

  const onDragEnd = () => {
    onDragEndCb();
  };

  return (
    <>
      <PivotControls
        scale={75}
        depthTest={false}
        fixed
        lineWidth={2}
        annotations={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <mesh position={[0, 0, 0]} scale={0.1}>
          <boxGeometry />
          <meshBasicMaterial color={'#ff0000'} />
        </mesh>
      </PivotControls>
      <GizmoHelper
        alignment="bottom-left" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
    </>
  );
}
