const loadMaps = (scene, level) => {
    switch(level){
        case 0:
            scene.load.spritesheet("mageCity", "./tiles/magecity.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("mapTown", "./maps/glitchGameTown.json");
            break;
        case 1:
            scene.load.spritesheet("indoorTiles", "./tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("house1", "./maps/house1Interior.json");
            break;
        case 2:
            scene.load.spritesheet("indoorTiles", "./tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("house2", "./maps/house2Interior.json");
            break;
        case 3:
            scene.load.spritesheet("indoorTiles", "./tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("house3", "./maps/house3Interior.json");
            break;
        case 4:
            scene.load.spritesheet("indoorTiles", "./tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("house4", "./maps/house4Interior.json");
            break;
        case 5:
            scene.load.spritesheet("indoorTiles", "./tiles/Rustic Indoor.png", {frameWidth: 32});
            scene.load.tilemapTiledJSON("house5", "./maps/house5Interior.json");
            break;
        default:
    }
};

export default loadMaps;