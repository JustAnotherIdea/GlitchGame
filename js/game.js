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
        const map = this.make.tilemap({key: "map1"});
        const tileset = map.addTilesetImage("Rustic Indoor", "indoorTiles");
        const layer1 = map.createLayer("Tile Layer 1", tileset, 0, 0);
        const layer2 = map.createLayer("Tile Layer 2", tileset, 0, 0);
        const layer3 = map.createLayer("Tile Layer 3", tileset, 0, 0);
        this.sys.animatedTiles.init(map);

        this.cursor = this.input.keyboard.createCursorKeys();

        this.player = new GlitchSprite(this, 300, 300, "plant");

        this.player.playGlitch();

        const test = new GlitchSprite(this, 300, 300, "plant");

        test.playGlitch();

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
