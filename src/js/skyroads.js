var camera, scene, renderer;
var geometry, material, mesh;

var SkyRoads = (function() {
    var plane = {
        size : { x: 200, y: 10, z: 200 },
        rotation : { x: 0, y: 0, z: 0 }
    };

    var camera = {
        position : { x:0, y:240, z:-500 }
    };

    

    return {
        object2Folder : object2Folder,
        plane: plane,
        camera: camera
    }

})();

$(function() {
    var gui = new dat.GUI();
    SkyRoads.object2Folder(gui, SkyRoads);

    init();
    animate();

});




function init() {

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.CubeGeometry( 1, 1, 1 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame( animate );

    mesh.scale.x = SkyRoads.plane.size.x;
    mesh.scale.y = SkyRoads.plane.size.y;
    mesh.scale.z = SkyRoads.plane.size.z;
    mesh.rotation.x = SkyRoads.plane.rotation.x.toRadians();
    mesh.rotation.y = SkyRoads.plane.rotation.y.toRadians();
    mesh.rotation.z = SkyRoads.plane.rotation.z.toRadians();

    camera.position.x = SkyRoads.camera.position.x;
    camera.position.y = SkyRoads.camera.position.y;
    camera.position.z = SkyRoads.camera.position.z;

    camera.lookAt(mesh.position);

    // camera.target.position.x = 0;
    // camera.target.position.y = 0;
    // camera.target.position.z = 0;

    renderer.render( scene, camera );

}