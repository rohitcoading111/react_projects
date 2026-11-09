import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Planet() {
  const planetRef = useRef(null)
  const ringRef = useRef(null)

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.15
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.3}
    >
      <group position={[0, 0, 0]}>

        {/* Planet */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[1.65, 64, 64]} />

          <meshStandardMaterial
            color="#333b85"
            roughness={0.8}
            metalness={0.2}
            emissive="#171b55"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Atmosphere */}
        <mesh scale={1.08}>
          <sphereGeometry args={[1.65, 64, 64]} />

          <meshBasicMaterial
            color="#655cff"
            transparent
            opacity={0.12}
            side={2}
          />
        </mesh>

        {/* Planet Ring */}
        <mesh
          ref={ringRef}
          rotation={[1.2, 0.2, -0.4]}
        >
          <torusGeometry args={[2.15, 0.035, 16, 120]} />

          <meshStandardMaterial
            color="#a78bfa"
            emissive="#714bff"
            emissiveIntensity={2}
          />
        </mesh>

      </group>
    </Float>
  )
}

export default Planet