const loadMaps = (scene, level) => {
    return new Promise((resolve, reject) => {
        switch(level){
            case 1:
                scene.load.spritesheet("indoorTiles", "/tiles/Rustic Indoor.png", {frameWidth: 32});
                scene.load.spritesheet("mageCity", "/tiles/magecity.png", {frameWidth: 32});
                scene.load.tilemapTiledJSON("mapTown", "/maps/glitchGameTown.json");
                scene.load.tilemapTiledJSON("house1", "/maps/house1Interior.json");
                scene.load.tilemapTiledJSON("house2", "/maps/house2Interior.json");
                scene.load.tilemapTiledJSON("house3", "/maps/house3Interior.json");
                scene.load.tilemapTiledJSON("house4", "/maps/house4Interior.json");
                scene.load.tilemapTiledJSON("house5", "/maps/house5Interior.json");
                scene.load.once('complete', resolve);
                scene.load.once('error', reject);
                scene.load.start();
                break;
            default:
                resolve(); // Resolve immediately if level is not supported
        }
    });
};

export default loadMaps;