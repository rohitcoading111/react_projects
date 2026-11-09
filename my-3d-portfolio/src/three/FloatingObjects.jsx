import { Float } from '@react-three/drei'

function FloatingObjects() {
  return (
    <>
      <Float speed={2} floatIntensity={1}>
        <mesh position={[-2.5, 1.7, -1]}>
          <icosahedronGeometry args={[0.2, 1]} />
          <meshStandardMaterial
            color="#a78bfa"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} floatIntensity={0.8}>
        <mesh position={[2.7, -1.5, -1]}>
          <octahedronGeometry args={[0.25]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={2.5} floatIntensity={0.8}>
        <mesh position={[-2.4, -1.7, -2]}>
          <torusGeometry args={[0.25, 0.05, 16, 48]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#6d28d9"
            emissiveIntensity={1.5}
          />
        </mesh>
      </Float>
    </>
  )
}

export default FloatingObjects