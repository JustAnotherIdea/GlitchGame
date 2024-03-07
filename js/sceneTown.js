import loadMaps from "./loadMaps";
import loadSprites from "./loadSprites";
import GlitchSprite from "./glitchSprite";

class TownScene extends Phaser.Scene{

    constructor(){
        super({key: "TownScene", active: true});
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
    }
  
    preload(){
        loadSprites(this);
        loadMaps(this, 1)
        .then(() => {
            //can prob move this
          this.map = this.make.tilemap({key: "mapTown"});
          this.tileset = this.map.addTilesetImage("magecity", "mageCity");
          this.layer1 = this.map.createLayer("Tile Layer 1", this.tileset, 0, 0);
          this.layer2 = this.map.createLayer("Tile Layer 2", this.tileset, 0, 0);
          this.layer3 = this.map.createLayer("Tile Layer 3", this.tileset, 0, 0);
          this.collisionLayer = this.map.createLayer("collisionLayer", this.tileset, 0, 0);
          this.collisionLayer.setCollisionByProperty({ collides: true });
          this.collisionLayer.setAlpha(0);
          this.mapLoaded = true;
          this.create();
        })
        .catch(error => {
          // Handle error if the loading fails
          console.error('Error loading maps:', error);
        });
    }

    create(levels){
        if(!this.mapLoaded) return;

        // this.sys.setVisible(false);
        


        this.cursor = this.input.keyboard.createCursorKeys();
        
        this.player = new GlitchSprite(this, 400, 430, "plant1");

        this.player.sprite.setSize(26,18).setOffset(this.player.sprite.width/10+2,35);

        this.physics.add.collider(this.player.sprite, this.collisionLayer);
        
        this.player.playGlitch();

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.startFollow(this.player.sprite);

        const house1 = new GlitchSprite(this,64 + (352/2), 64 + (320/2), "house1");
        const house2 = new GlitchSprite(this,64 + (544/2), 352 + (512/2), "house2");
        const house3 = new GlitchSprite(this,1664 + (192/2), 64 + (288/2), "house3");
        const house4 = new GlitchSprite(this,1440 + (416/2), 544 + (352/2), "house4");
        const house5 = new GlitchSprite(this,768 + (736/2), 160 + (608/2), "house5");

        this.placeObjects();

        house1.playGlitch();
        house2.playGlitch();
        house2.sprite.depth += 64;

        // this.sys.setActive(false);

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

        this.player.sprite.depth = this.player.sprite.y;
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

    placeObjects(){
        const plant3_1 = new GlitchSprite(this, 459, 437, "plant3", 23, 19, 3, 0, true);
        const plant3_2 = new GlitchSprite(this, 595, 437, "plant3", 23, 19, 3, 0, true);
        const plant3_3 = new GlitchSprite(this, 459, 581, "plant3", 23, 19, 3, 0, true);
        const plant3_4 = new GlitchSprite(this, 595, 581, "plant3", 23, 19, 3, 0, true);
        const seat_1 = new GlitchSprite(this, 305, 883, "seat", 25, 20, 5, 0, true);
        const seat_2 = new GlitchSprite(this, 347, 910, "seat", 25, 20, 5, 0, true);
        const seat_3 = new GlitchSprite(this, 305, 941, "seat", 25, 20, 5, 0, true);
        const seat_4 = new GlitchSprite(this, 259, 910, "seat", 25, 20, 5, 0, true);
        const table = new GlitchSprite(this, 304, 910, "table", 58, 38, 3, 0, true);
        const bench = new GlitchSprite(this, 528, 383, "bench", 62, 23, 1, 0, true);
        const tree1_1 = new GlitchSprite(this, 444, 150, "tree1", 32, 32, 0, 0, true);
        const tree3_1 = new GlitchSprite(this, 783, 779, "tree3", 30, 23, 49, 18, true);
        const tree3_2 = new GlitchSprite(this, 721, 272, "tree3", 30, 23, 49, 18, true);
        const fountain = new GlitchSprite(this, 530, 517, "fountain", 64, 40, 0, 0, true);
    }
}

export default TownScene;
