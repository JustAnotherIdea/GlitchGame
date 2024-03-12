import Phaser from "phaser";
class GlitchSprite extends Phaser.GameObjects.GameObject{
    constructor(scene, x, y, texture, collisionX, collisionY, offsetCollisionX, offsetCollisionY, collideWithPlayer){
        super(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.texture = texture;
        this.sprite = this.scene.physics.add.sprite(this.x, this.y, this.texture);
        if(!scene.anims.get(`${this.texture}Glitch`)){
            this.animationConfig = {
                key: `${this.texture}Glitch`,
                frames: scene.anims.generateFrameNumbers(this.texture, {
                    start: 1,
                }),
                frameRate: 12,
                repeat: -1,
            },
            scene.anims.create(this.animationConfig);
        }
        this.sprite.depth = this.y;
        this.center = this.sprite.getCenter();
        this.sprite.setSize(collisionX,collisionY).setOffset(offsetCollisionX,this.sprite.height-collisionY-offsetCollisionY);
        if(collideWithPlayer){
            scene.objects.push(this)
            this.sprite.setImmovable(true);
            this.collider = this.scene.physics.add.collider(this.scene.player.sprite, this.sprite, () => {
                scene.collidedObject = this;
            });
        }
        this.display = true;
        this.collision = true;
        this.locked = true;
        this.anchored = true;
    }
    
    toggleGlitchAnim(){
        if(this.display){
            this.sprite.play(`${this.sprite.texture.key}Glitch`);
            this.display = false;
        } else {
            this.sprite.stop();
            this.sprite.setFrame(0);
            this.display = true;
        }
    }

    toggleCollision(){
        if(this.collision){
            this.collider.destroy();
            this.collision = false;
        } else {
            this.collider = this.scene.physics.add.collider(this.scene.player.sprite, this.sprite, () => {
                this.scene.collidedObject = this;
            });
            this.collision = true;
        }
    }

    showOptions(){
        const uiScene = this.scene.scene.get("uiScene");
        const rectangleWidth = 200;
        const rectangleHeight = 100;
        const cornerRadius = 32;

        const x = (uiScene.game.config.width / 2) - (rectangleWidth / 2);
        const y = (uiScene.game.config.height / 2) - (rectangleHeight / 2);

        this.collisionOption = uiScene.add.graphics();
        this.collisionOption.fillStyle(0xffff00, 1);
        this.collisionOption.fillRoundedRect(x, y, rectangleWidth, rectangleHeight, cornerRadius);
        this.collisionOption.setDepth(10000)
        this.optionsContainer = uiScene.add.container([this.collisionOption]);
    }
}

export default GlitchSprite;