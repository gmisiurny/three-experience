
# Three-cli v0.0.0

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
            'textures/foo/bar.jpg',     
            'textures/foo/baz.jpg'
        ]
    },
    {
        name: 'fooTexture',
        type: 'texture',
        path: 'textures/foo/bar.jpg'
    },
    {
        name: 'barTexture',
        type: 'texture',
        path: 'textures/bar/baz.jpg'
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

