import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {CubeTextureLoader, TextureLoader} from "three";
import EventEmitter from './EventEmitter.js'

export default class Resources extends EventEmitter {
    constructor(sources) {
        super()

        this.sources = sources
        this.items = {}
        this.loaded = 0
        this.toLoad = this.sources.length

        // Have you loaded any source (=> sources.js)?
        if (this.toLoad > 0) {
            this.setLoaders()
            this.startLoading()
        }
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.textureLoader = new TextureLoader()
        this.loaders.cubeTextureLoader = new CubeTextureLoader()
        this.loaders.gltfLoader = new GLTFLoader()
    }

    startLoading() {
        // Load each source
        for (const source of this.sources) {
            switch (source.type) {
                case 'texture':
                    this.loaders.textureLoader.load(
                        source.path,
                        (file) => this.sourceLoaded(source, file)
                    )
                    break;
                case 'cubeTexture':
                    this.loaders.cubeTextureLoader.load(
                        source.path,
                        (file) => this.sourceLoaded(source, file)
                    )
                    break;
                case 'gltfModel':
                    this.loaders.gltfLoader.load(
                        source.path,
                        (file) => this.sourceLoaded(source, file)
                    )
                    break;
                default:
                    break;
            }
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file
        this.loaded++
        if (this.loaded === this.toLoad) this.trigger('ready')
    }
}