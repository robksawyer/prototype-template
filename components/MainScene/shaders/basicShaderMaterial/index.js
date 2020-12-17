/**
 * @file shaders/basicShaderMaterial/index.js
 * Basic shader setup and material example.
 *
 * Usage:
 *
 *    import { extend } from 'react-three-fiber
 *    import { BasicShaderMaterial } from './shaders/BasicShaderMaterial'
 *
 *    extend({ BasicShaderMaterial })
 *
 *    ... later in the React component
 *    <mesh>
 *      ...
 *      <basicShaderMaterial time={0} ... />
 *    </mesh>
 *
 */
import * as THREE from 'three'
import { extend } from 'react-three-fiber'
import { shaderMaterial } from '@react-three/drei'

import vertex from './default.vert'
import fragment from './default.frag'

/**
 * BasicShaderMaterial
 * @param {*} uniforms
 */
const BasicShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector4(),
    texture1: null,
    mouse: new THREE.Vector2(),
    // landscape: new THREE.TextureLoader(
    //   '/3d/textures/checkerboard.jpg',
    //   (texture) => {
    //     console.log('texture', texture)
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    //   }
    // ),
  },
  // vertex shader
  vertex,
  // fragment shader
  fragment,
  (material) => {
    console.log('material', material)
    material.side = THREE.DoubleSide
    // material.wireframe = false
    // material.vertexColors = true
    // material.flatShading = true

    // material.defines = {
    //   '#extension GL_OES_standard_derivatives': 'enable',
    // }
    // material.extensions = {
    //   derivatives: true,
    // }
  }
)

extend({ BasicShaderMaterial })
