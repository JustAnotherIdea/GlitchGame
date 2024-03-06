import AnimatedTiles from 'phaser-animated-tiles/dist/AnimatedTiles.min.js';

const loadMaps = (scene, level) => {
    switch(level){
        case 1:
            scene.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
            scene.load.spritesheet("indoorTiles", "/tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.spritesheet("mageCity", "/tiles/magecity.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("mapTown", "/maps/glitchGameTown.json");
            break;
        
    }
}

export default loadMaps;