
# Three template

## Resources

- To load resources, create a static folder at `yourApp/` then create  
as many sub-folders as you need and put your resources in it.
- Edit sources.js

Ex:
```javascript
export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path: [
            'static/textures/foo/bar.jpg',     
            'static/textures/foo/baz.jpg'
        ]
    },
    {
        name: 'fooTexture',
        type: 'texture',
        path: 'static/textures/foo/bar.jpg'
    },
    {
        name: 'barTexture',
        type: 'texture',
        path: 'static/textures/bar/baz.jpg'
    }
]
```

- Add this method in World.js constructor and do your setup:

```javascript
this.resources.on('ready', () => {})
```

Ex:

```javascript
this.resources.on('ready', () => {    
    this.sphere = new Sphere()
    this.environment = new Environment()
})
```

> **_NOTE:_**  You can remove these lines from World.js constructor:
>```javascript
> //Setup
> this.sphere = new Sphere()
> this.environment = new Environment()

- Edit the object that requires the resource

Ex:

```javascript
export default class Sphere {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = this.experience.debug
        this.resources = this.experience.resources // load your resource
        // ...
    }

    // ...
    setMaterial() {        
        this.material = new MeshStandardMaterial({            
            map: this.resources.items.sphereTexture
        })
    }
    // ...
}

```
> **_NOTE:_** sphereTexture references the type of the resource in  
> sources.js

