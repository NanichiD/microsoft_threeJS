import  * as THREE from 'three'
import * as dat from 'dat.gui'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// creating the renderer
const app = document.querySelector('#app')
const renderer = new THREE.WebGLRenderer()
renderer.setSize(app.innerWidth, app.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 100))
app.appendChild(renderer.domElement)
renderer.shadowMap.enabled = true

// creating the scene
const scene = new THREE.Scene()

// creating the camera
const camera = new THREE.PerspectiveCamera(
    75,
    app.innerWidth, app.innerHeight,
    0.1,
    100,
)
camera.position.set(0, 0, 20)

// window resizing eventListener
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 100));
});

// adding the orbitControls
const orbit = new THREE.OrbitControls(camera, renderer.domElement) 
orbit.update()

// adding the dat.GUI
const gui = new dat.GUI()
const  valuesObj = {

} 

// anything lights
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 10)
scene.add(ambientLight)
directionalLight.castShadow = true

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 10)
directionalLight.position.set(0, 30, 0)
scene.add(directionalLight)
directionalLight.castShadow = true


const animate = () => {
    // rendering the scene
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)