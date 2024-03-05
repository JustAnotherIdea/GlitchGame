import AnimatedTiles from 'phaser-animated-tiles/dist/AnimatedTiles.min.js';

const loadMaps = (scene, level) => {
    switch(level){
        case 1:
            scene.load.scenePlugin('animatedTiles', AnimatedTiles, 'animatedTiles', 'animatedTiles');
            scene.load.spritesheet("indoorTiles", "/public/tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("map1", "/public/maps/glitchGameMap1.json");
            break;
        
    }
}

export default loadMaps;