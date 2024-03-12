import loadMaps from "./loadMaps";
import loadSprites from "./loadSprites";
import GlitchSprite from "./glitchSprite";
import sceneUtils from "./sceneUtils";

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
        loadMaps(this, 0)
    }
    
    create(){
        
        this.map = this.make.tilemap({key: "mapTown"});
        this.tileset = this.map.addTilesetImage("magecity", "mageCity");
        this.player = new GlitchSprite(this, 400, 430, "plant1");

        sceneUtils.setScene(this);
        
        this.placeObjects();
        
    }
    
    update(){
        sceneUtils.getMovement(this);
    }
    
    placeObjects(){
        const house1 = new GlitchSprite(this,64 + (352/2), 64 + (320/2), "house1");
        const house2 = new GlitchSprite(this,64 + (544/2), 352 + (512/2), "house2");
        const house3 = new GlitchSprite(this,1664 + (192/2), 64 + (288/2), "house3");
        const house4 = new GlitchSprite(this,1440 + (416/2), 544 + (352/2), "house4");
        const house5 = new GlitchSprite(this,768 + (736/2), 160 + (608/2), "house5");
        house2.sprite.depth += 64;
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
        const tree1_2 = new GlitchSprite(this, 1529, 309, "tree1", 32, 32, 0, 0, true);
        const tree1_3 = new GlitchSprite(this, 1529, 480, "tree1", 32, 32, 0, 0, true);
        const tree2 = new GlitchSprite(this, 1841, 483, "tree2", 32, 32, 18, 8, true);
        tree2.sprite.depth += 20;
        const tree3_1 = new GlitchSprite(this, 783, 779, "tree3", 30, 23, 49, 18, true);
        tree3_1.sprite.depth += 20;
        const tree3_2 = new GlitchSprite(this, 721, 272, "tree3", 30, 23, 49, 18, true);
        tree3_2.sprite.depth += 20;
        const fountain = new GlitchSprite(this, 530, 517, "fountain", 64, 40, 0, 0, true);
        const box_1 = new GlitchSprite(this, 762, 523, "box", 14, 24, 4, 2, true);
        const box_2 = new GlitchSprite(this, 762, 588, "box", 14, 24, 4, 2, true);
        const box_3 = new GlitchSprite(this, 1659, 283, "box", 14, 24, 4, 2, true);
        const box_4 = new GlitchSprite(this, 1659, 325, "box", 14, 24, 4, 2, true);
        const potOnBox_1 = new GlitchSprite(this, 789, 605, "potOnBox", 14, 24, 12, 2, true);
        const potOnBox_2 = new GlitchSprite(this, 1838, 357, "potOnBox", 14, 24, 12, 2, true);
        const plant5_1 = new GlitchSprite(this, 885, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_2 = new GlitchSprite(this, 975, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_3 = new GlitchSprite(this, 1070, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_4 = new GlitchSprite(this, 1164, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_5 = new GlitchSprite(this, 1255, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_6 = new GlitchSprite(this, 1347, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_7 = new GlitchSprite(this, 1442, 118, "plant5", 32, 32, 0, 0, true);
        const plant5_8 = new GlitchSprite(this, 1532, 378, "plant5", 32, 32, 0, 0, true);
        const plant5_9 = new GlitchSprite(this, 1532, 437, "plant5", 32, 32, 0, 0, true);
        const lamp_1 = new GlitchSprite(this, 977, 754, "lamp", 16, 18, 7, 3, true);
        const lamp_2 = new GlitchSprite(this, 1555, 904, "lamp", 16, 18, 7, 3, true);
        const pillar1_1 = new GlitchSprite(this, 1013, 759, "pillar1", 24, 24, 4, 1, true);
        const pillar1_2 = new GlitchSprite(this, 1261, 759, "pillar1", 24, 24, 4, 1, true);
        const pillar2 = new GlitchSprite(this, 1679, 360, "pillar2", 24, 24, 4, 1, true);
        const barrel1_1 = new GlitchSprite(this, 1043, 775, "barrel1", 32, 32, 0, 0, true);
        const barrel1_2 = new GlitchSprite(this, 1075, 775, "barrel1", 32, 32, 0, 0, true);
        const barrel2_1 = new GlitchSprite(this, 1661, 895, "barrel2", 32, 38, 0, 12, true);
        const barrel2_2 = new GlitchSprite(this, 1694, 895, "barrel2", 32, 38, 0, 12, true);
        const barrel2_3 = new GlitchSprite(this, 1647, 136, "barrel2", 32, 38, 0, 12, true);
        const plant2 = new GlitchSprite(this, 1214, 775, "plant2", 32, 32, 0, 0, true);
    }
}

export default TownScene;
