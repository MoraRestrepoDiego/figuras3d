
function init() {
  //fondo
  var loader = new  THREE.TextureLoader();
  loader.load("./fondo Demeter1.png", function(texture){
     scene.background = texture;
  });
  
  //video 
  let scene, camera, renderer;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.y = 30;
  camera.position.x = -10;
  camera.position.z = -10;
  

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  hlight = new THREE.DirectionalLight (0x05050505,100);
  scene.add(hlight);

  light1 = new THREE.PointLight(0xc4c4c4,0.3);
  light1.position.set(0.05,0.05,0.05);
  scene.add(light1);
 

  let loader1 = new THREE.GLTFLoader();
  loader1.load('../3d/1/scene.gltf', function(gltf){
    perro = gltf.scene.children[0];
    perro.scale.set(1.5,1.5,1.5);
    scene.add(gltf.scene);
    perro.position.x = -30;
    perro.position.y = 26;
    perro.position.z = -20;
  });

  let loader2 = new THREE.GLTFLoader();
  loader2.load('../3d/2/scene2.gltf', function(gltf){
    vieja = gltf.scene.children[0];
    vieja.scale.set(0.4,0.4,0.4);
    scene.add(gltf.scene);
    vieja.position.x = -20;
    vieja.position.y = 32;
    vieja.position.z = -20;

  });

  let loader3 = new THREE.GLTFLoader();
  loader3.load('../3d/3/scene3.gltf', function(gltf){
    esqueleto = gltf.scene.children[0];
    esqueleto.scale.set(0.6,0.6,0.6);
    scene.add(gltf.scene);
    esqueleto.position.x = -15;
  esqueleto.position.y = 29.5;
  esqueleto.position.z = -20;

  });


const flyControls = new THREE.FlyControls(camera,renderer.domElement);

flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;


/* const geometry = new THREE.SphereGeometry( 10, 32, 16 );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("/imagenes/img4.jpg");

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flashading = true;
const sphere = new THREE.Mesh( geometry , material );
scene.add( sphere );
sphere.position.x = 15;
line.position.x = 15; */

/* const control = new THREE.DragControls([capsule,line1, box, line2, sphere, line3, torusKnot, line4] ,camera, renderer.domElement);//
control.deactivate();
control.activate();

 control.addEventListener("hoveron", function(event){
   // console.log(event.object.material1)
    event.object.material.wireframe = true;
	event.object.scale.y *= 4;
});

control.addEventListener("hoveroff", function(event){
    console.log(event.object.material)
    event.object.material.wireframe = false
	event.object.scale.y /= 4;

}) 

camera.position.z =50;
camera.position.y =0;
camera.position.x =0;
 */
//funcion

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  /* sphere.rotation.x += 0.5;
  line.rotation.x += 0.5; */
  flyControls.update(0.5);
   } 
   animate(); 
}

init();

