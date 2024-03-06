import loadMaps from "./loadMaps";
import loadSprites from "./loadSprites";
import GlitchSprite from "./glitchSprite";

class Game extends Phaser.Scene{

    constructor(){
        super("Game");
        this.player;
        this.playerSpeed = 150;
        this.cursor;
        this.dx = 0;
        this.dy = 0;
        this.normalization;
    }
  
    preload(){
        loadMaps(this, 1);
        loadSprites(this);
    }

    create(){
        const map = this.make.tilemap({key: "mapTown"});
        const tileset = map.addTilesetImage("magecity", "mageCity");
        const layer1 = map.createLayer("Tile Layer 1", tileset, 0, 0);
        const layer2 = map.createLayer("Tile Layer 2", tileset, 0, 0);
        const layer3 = map.createLayer("Tile Layer 3", tileset, 0, 0);
        this.sys.animatedTiles.init(map);

        this.cursor = this.input.keyboard.createCursorKeys();
        
        this.player = new GlitchSprite(this, 300, 300, "bookshelf1");
        
        this.player.playGlitch();

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player.sprite);

        const house1 = new GlitchSprite(this,64 + (352/2), 64 + (320/2), "house1");
        const house2 = new GlitchSprite(this,64 + (544/2), 352 + (512/2), "house2");
        const house3 = new GlitchSprite(this,1664 + (192/2), 64 + (288/2), "house3");
        const house4 = new GlitchSprite(this,1440 + (416/2), 544 + (352/2), "house4");
        const house5 = new GlitchSprite(this,768 + (736/2), 160 + (608/2), "house5");

        house1.playGlitch();
        house2.playGlitch();

    }
                
    update(){

        //player controls
        const {left,right,up,down}= this.cursor;

        this.dx = 0;
        this.dy = 0;

        if (left.isDown) {
            this.dx = -1;
        } else if (right.isDown) {
            this.dx = 1;
        }

        if (up.isDown) {
            this.dy = -1;
        } else if (down.isDown) {
            this.dy = 1;
        }

        this.normalization = this.getNormalization(this.dx, this.dy);

        this.player.sprite.setVelocityX(this.playerSpeed * this.dx * this.normalization);
        this.player.sprite.setVelocityY(this.playerSpeed * this.dy * this.normalization);
    }

    getMagnitude(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    checkNonZeroComponents(x, y) {
        return Math.abs(x) > 0 || Math.abs(y) > 0;
    }

    getNormalization(x, y) {
        return this.checkNonZeroComponents(x, y) ? 1 / this.getMagnitude(x, y) : 0;
    }
}

export default Game;
