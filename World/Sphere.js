import {
    Mesh,
    MeshStandardMaterial,
    SphereGeometry
} from "three";
import Experience from '../Experience.js'

export default class Sphere {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('sphere')
            this.debugFolder
                .add(this.material, 'wireframe')

            const parameters = { color: 0xff0000 }
            this.debugFolder
                .addColor(parameters, 'color')
                .onChange(() => {
                    this.material.color.set(parameters.color)
                })
        }
    }

    setGeometry() {
        this.geometry = new SphereGeometry( 3, 16, 16 )
    }

    setMaterial() {
        this.material = new MeshStandardMaterial({
            wireframe: true
        })
    }

    setMesh() {
        this.mesh = new Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    update() {
        this.mesh.rotation.y += 0.01
    }
}