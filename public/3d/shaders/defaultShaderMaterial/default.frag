// Basic Shader
// Rob Sawyer
// @see https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
#define GLSLIFY 1
#define HIGH_PRECISION

precision highp float;
precision highp int;

// ThreeJS defaults
// uniform mat4 viewMatrix;
// uniform vec3 cameraPosition;

uniform float time;
uniform float progress;

uniform sampler2D texture1; 
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

float PI = 3.14159265358979323846264338;

void main() {

    // @see https://community.khronos.org/t/getting-the-normal-with-dfdx-and-dfdy/70177
    // vec3 X = dFdx(vNormal);
    // vec3 Y = dFdy(vNormal);
    // vec3 normal = normalize(cross(X,Y));

    // float diffuse = dot(normal, vec3(1.));
    // vec4 t = texture2D(texture1, vUv);
    // // gl_FragColor = vec4(vUv, 0.0, 1.);
    // gl_FragColor = t;
    // gl_FragColor =  vec4(diffuse);

    gl_FragColor = vec4(vUv,0.0,1.);
}




