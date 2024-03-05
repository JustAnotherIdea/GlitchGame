import Phaser from "phaser";

class GlitchSprite{
    constructor(scene, x, y, texture){
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
    }

    playGlitch(){
        this.sprite.play(`${this.sprite.texture.key}Glitch`);
    }

    stopGlitch(){
        this.sprite.stop();
        this.sprite.setFrame(0);
    }

}

export default GlitchSprite;