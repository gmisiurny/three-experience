import Experience from '../Experience.js'
import Environment from './Environment.js'
import Sphere from './Sphere.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.sphere = new Sphere()
        this.environment = new Environment()
    }

    update() {
        if (this.sphere) this.sphere.update()
    }
}