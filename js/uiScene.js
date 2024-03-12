class uiScene extends Phaser.Scene{

    constructor(){
        super({key: "uiScene", active: true});
    }
    
    preload(){
    }
    
    create(){
        this.scene.bringToTop();
    }
    
    update(){
    }
}

export default uiScene;