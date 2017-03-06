# links
  - [MDN WebGL Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

# background
  - creates beautiful and good performing 3d applications in the browser
  - Three.js provides a very easy to use JavaScript API around the features of WebGL, so you can create beautiful 3D graphics without having to learn WebGL in detail.
# three.js use cases
  - Creating simple and complex 3D geometries

# API
## basic steps
  1. define a scene, camera, and renderer
  2. define the axes and plane and add each to the scene
## terminology
  - plane: 2d rectangle that serves as ground area
  - cube: 3d cube
  - sphere: 3d sphere
  - camera: determines what you'll see when you render a scene
  - axes: x,y,z; helpful debugging tool to see where the objects are rendered in 3d space
  - scene: container used to store and keep track of all objects you want to render and all the lights you want to use
    `var scene = new THREE.Scene();`
  - material objects: tell three.js what some plane looks like, e.g. its color and transparency
    `THREE.MeshBasicMaterial`
  - renderer: object responsible for calculating what the scene object will look like in the browser based on the camera object's angle
    + there are different renderes available besides the WebGL-based one
    1. WebGL
    2. canvas
    3. renderer
## renderer
  - set the size of the scene `.setScene`
  - set a background color `.setClearColor( color, alpha )`
    - `renderer.setClearColor(0xff0000, 1);`
## other api
  - renderer.setClearColorHex(0xEEEEEE);
  - renderer.setSize(window.innerWidth,
  - THREE.AxisHelper
  - THREE.BoxGeometry(4,
  - THREE.Mesh(planeGeometry,
  - THREE.MeshBasicMaterial({color:
  - THREE.PerspectiveCamera
  - THREE.PlaneGeometry(60,
  - THREE.Scene();
  - THREE.WebGLRenderer();
  - THREE.SphereGeometry(4,
