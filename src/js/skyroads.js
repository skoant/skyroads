var SkyRoads = (function() {
    
    var time = 0;
    var delta = 0;

    var world = {
        gravity : 10
    };

    var cell = {
        size : { x: 200, y: 10 }
    };

    var camera = {
        targetOffset: 600,
        fov : 75,
        position : { x:0, y:0, z:0 },
        offsetPosition : { x:0, y:240, z: 500 }
    };

    var vehicle = {
        velocity :  { x: 0, y: 0, z: 0 },
        acceleration : 10,
        deceleration : 50,
        maximumVelocity : { x: 1000, y: 0, z: 50 },
        size : { x: 50, y: 30, z: 50 },
        position : { x:0, y:20, z:0 }
    };

    var keyboard = {
        keyUp : false,
        keyDown : false,
        keyLeft : false,
        keyRight : false,
        spacebar : false
    };

    return {
        time: time,
        delta: delta,
        world: world,
        vehicle: vehicle,
        cell: cell,
        camera: camera,
        keyboard: keyboard
    };

})();
