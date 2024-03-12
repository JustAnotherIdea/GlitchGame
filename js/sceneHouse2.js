import loadMaps from "./loadMaps";
import loadSprites from "./loadSprites";
import GlitchSprite from "./glitchSprite";
import sceneUtils from "./sceneUtils";

class House2Scene extends Phaser.Scene{

    constructor(){
        super({key: "House2Scene", active: true});
        this.player;
        this.playerSpeed = 550;
        this.cursor;
        this.dx = 0;
        this.dy = 0;
        this.normalization;
        this.map;
        this.tileset;
        this.layer1;
        this.layer2;
        this.layer3;
        this.collisionLayer;
        this.mapLoaded = false;
    }
    
    preload(){
        loadSprites(this);
        loadMaps(this, 2)
    }
    
    create(){
        
        this.map = this.make.tilemap({key: "house2"});
        this.tileset = this.map.addTilesetImage("Rustic Indoor", "indoorTiles");
        this.player = new GlitchSprite(this, 400, 430, "plant1");

        sceneUtils.setScene(this);
        
        this.placeObjects();
        
    }
    
    update(){
        sceneUtils.getMovement(this);
    }
    
    placeObjects(){
        
    }
}

export default House2Scene;
