
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/modelche.glb')
  return (
    <group ref={group} scale={0.5} dispose={null} position={[4,-0.2,0]} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[1.68, 2.77, -1.28]} rotation={[-0.06, 0, 0]} scale={7.47}>
          <mesh geometry={nodes.Plane004_0.geometry} material={materials.shadow} castShadow/>
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube005_0.geometry} material={materials.ruedas} castShadow/>
        </group>
        <group position={[0, 0, -4.91]} rotation={[Math.PI / 2, -1.55, 0]}>
          <mesh geometry={nodes.GP_Layer_CUGP_Layer_0.geometry} material={materials.clouds} castShadow/>
        </group>
        <mesh geometry={nodes.Plane_0.geometry} material={materials.shadow} castShadow/>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube000_0.geometry} material={materials.cristales} castShadow/>
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube001_0.geometry} material={materials.carroceria} castShadow/>
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube002_0.geometry} material={materials.interior} castShadow />
        </group>
        <group position={[0.01, 0.41, 0.05]} rotation={[-0.06, -0.02, 0]}>
          <mesh geometry={nodes.Cube004_0.geometry} material={materials.chasis} castShadow/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/modelche.glb')
