import * as THREE from 'https://cdn.skypack.dev/three@110.0.1';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('Gear2.gltf", (gltf) => {
            scene.add(gltf.scene);
            }
           );

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
};
animate();
