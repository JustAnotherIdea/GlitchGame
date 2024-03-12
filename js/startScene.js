// import loadMusicAndSFX from "./musicAndSFX";
// import createMusicAndSFX from "./createMusicAndSFX";

class StartScene extends Phaser.Scene{
    constructor()
    {
        super({key: 'StartScene', active: true});
    }

    preload()
    {
        this.load.spritesheet("startBG", "startScreen.png", {frameWidth: 336, frameHeight: 280});
        this.load.spritesheet("startButton", "startButton.png", {frameWidth: 100, frameHeight: 30});
        // loadMusicAndSFX(this, levels.start);
    }

    create()
    {
        const background = this.add.sprite(window.innerWidth/2, window.innerHeight/2, "startBG");
        this.animationConfig = {
            key: `startScreenAnim`,
            frames: this.anims.generateFrameNumbers("startBG"),
            frameRate: 12,
            repeat: -1,
        },
        this.anims.create(this.animationConfig);
        background.play(`startScreenAnim`);
        // createMusicAndSFX(this, levels.start).then(musicToPlay => {
            const startButton = this.add.sprite(window.innerWidth/2, window.innerHeight/2+100, "startButton");
            this.animationConfig = {
                key: `startButtonAnim`,
                frames: this.anims.generateFrameNumbers("startButton", {
                    start: 1,
                }),
                frameRate: 12,
                repeat: -1,
            },
            this.anims.create(this.animationConfig);
            startButton.setInteractive();
            startButton.on("pointerover", () => startButton.play("startButtonAnim"));
            startButton.on("pointerout", () => {
                startButton.stop();
                startButton.setFrame(0);
            })
            startButton.on("pointerdown", () => {
                // if (musicToPlay) {
                //     musicToPlay.destroy();
                // }
                this.sys.setActive(false);
                this.sys.setVisible(false);
                this.scene.get("House1Scene").sys.setActive(true);
                this.scene.get("House1Scene").sys.setVisible(true);
            });
        // });
    }

    update()
    {

    }
}

export default StartScene;