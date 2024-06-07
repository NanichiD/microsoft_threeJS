import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import * as dat from 'dat.gui'

// basic three environment requirements
    // creating the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 100))
document.body.appendChild(renderer.domElement)
renderer.shadowMap.enabled = true
    // creating the scene
const scene = new THREE.Scene()
// creating the camera
const camera  =new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
)
scene.add(camera)
camera.position.set(0, 0, 10)


// adding orbit controls
const orbit = new OrbitControls(camera ,renderer) 
orbit.update()
// adding lights
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 10)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 10)
scene.add(directionalLight)
directionalLight.position.set(10, 20, 10)
directionalLight.castShadow = true
// creating the gui
const gui = new dat.GUI()
const guiOptions = {
    // update GUI settings here
}


// function to create elements
const object = (geometry, material, render) => {
    let objectMesh = new THREE.Mesh(geometry, material)
    // if render placeholder is true then add objectMesh to scene
    if(render!=true) {
        return objectMesh
    }
    scene.add(objectMesh)
}


//creating objects
const plane = object(new THREE.PlaneGeometry(100, 100, 100), new THREE.MeshStandardMaterial())
plane.rotation.x = 1.57
scene.add(plane)

object(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial(), true)

// functions for animations
// rendering scene and camera
renderer.render(scene, camera)