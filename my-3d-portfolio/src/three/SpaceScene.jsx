import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Suspense } from 'react'
import Planet from './Planet'
import FloatingObjects from './FloatingObjects'

function SpaceScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>

          <ambientLight intensity={0.7} />

          <directionalLight
            position={[-5, 5, 5]}
            intensity={2}
            color="#b5baff"
          />

          <pointLight
            position={[4, 2, 3]}
            intensity={35}
            color="#714bff"
          />

          <Stars
            radius={80}
            depth={50}
            count={2500}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />

          <Planet />
          <FloatingObjects />

        </Suspense>
      </Canvas>
    </div>
  )
}

export default SpaceScene