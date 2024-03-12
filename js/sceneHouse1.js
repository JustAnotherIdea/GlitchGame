import loadMaps from "./loadMaps";
import loadSprites from "./loadSprites";
import GlitchSprite from "./glitchSprite";
import sceneUtils from "./sceneUtils";

class House1Scene extends Phaser.Scene{

    constructor(){
        super({key: "House1Scene", active: true});
        this.player;
        this.playerSpeed = 150;
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
        this.interactToggle = false;
        this.collidedObject;
        this.objects = [];
    }
    
    preload(){
        // loadSprites(this);
        loadMaps(this, 1)
    }
    
    create(){
        
        this.map = this.make.tilemap({key: "house1"});
        this.tileset = this.map.addTilesetImage("Rustic Indoor", "indoorTiles");
        this.player = new GlitchSprite(this, 139, 98, "plant1", 26, 18, 5, 12);

        sceneUtils.setScene(this);

        this.cameras.main.setZoom(2);
        
        this.placeObjects();
        
    }
    
    update(){
        sceneUtils.getMovement(this);
        const {interact} = this.cursor;

        if(interact.isDown){
            if(!this.interactToggle){
                this.collidedObject.showOptions();
                this.interactToggle = true;
            }
        } else {
            this.interactToggle = false;
        }
    }
    
    placeObjects(){
        const bookshelf1 = new GlitchSprite(this, 78, 64, "bookshelf1", 86, 32, 5, 0, true);
        const bookshelf2 = new GlitchSprite(this, 338, 64, "bookshelf2", 86, 32, 5, 0, true);
        const plant1_1 = new GlitchSprite(this, 276, 98, "plant1", 26, 18, 5, 12, true);
        const plant1_2 = new GlitchSprite(this, 46, 258, "plant1", 26, 18, 5, 12, true);
        const plant1_3 = new GlitchSprite(this, 364, 258, "plant1", 26, 18, 5, 12, true);
        const clothTable = new GlitchSprite(this, 208, 94, "clothTable", 86, 32, 5, 8, true);
        const woodTableVertical1 = new GlitchSprite(this, 48, 208, "woodTableVertical", 32, 80, 0, 0, true);
        const woodTableVertical2 = new GlitchSprite(this, 366, 208, "woodTableVertical", 32, 80, 0, 0, true);
        const skulls = new GlitchSprite(this, 48, 186, "skulls2", 20, 20, 5, 7, true);
        skulls.sprite.depth += 30;
        const candle1 = new GlitchSprite(this, 180, 60, "candle1", 6, 7, 13, 11, true);
        candle1.sprite.depth += 40;
        const candle2 = new GlitchSprite(this, 238, 60, "candle2", 6, 7, 13, 11, true);
        candle2.sprite.depth += 40;
        const floatingBook = new GlitchSprite(this, 210, 57, "floatingBook", 28, 7, 2, 7, true);
        floatingBook.sprite.depth += 40;
        
    }
}

export default House1Scene;
