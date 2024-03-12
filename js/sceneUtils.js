const sceneUtils = {
    getMovement(scene){
        //player controls
        const {left,right,up,down}= scene.cursor;
        
        scene.dx = 0;
        scene.dy = 0;
        
        if (left.isDown) {
            scene.dx = -1;
        } else if (right.isDown) {
            scene.dx = 1;
        }
        
        if (up.isDown) {
            scene.dy = -1;
        } else if (down.isDown) {
            scene.dy = 1;
        }
        
        scene.normalization = this.getNormalization(scene.dx, scene.dy);
        
        scene.player.sprite.setVelocityX(scene.playerSpeed * scene.dx * scene.normalization);
        scene.player.sprite.setVelocityY(scene.playerSpeed * scene.dy * scene.normalization);
        
        scene.player.sprite.depth = scene.player.sprite.y;
    },
    
    getMagnitude(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    },
    
    checkNonZeroComponents(x, y) {
        return Math.abs(x) > 0 || Math.abs(y) > 0;
    },
    
    getNormalization(x, y) {
        return this.checkNonZeroComponents(x, y) ? 1 / this.getMagnitude(x, y) : 0;
    },
    
    setScene(scene){
        scene.layer1 = scene.map.createLayer("Tile Layer 1", scene.tileset, 0, 0);
        scene.layer2 = scene.map.createLayer("Tile Layer 2", scene.tileset, 0, 0);
        scene.layer3 = scene.map.createLayer("Tile Layer 3", scene.tileset, 0, 0);
        scene.collisionLayer = scene.map.createLayer("collisionLayer", scene.tileset, 0, 0);
        scene.collisionLayer.setCollisionByProperty({ collides: true });
        scene.collisionLayer.setAlpha(0);
        scene.mapLoaded = true;
    
        scene.sys.setVisible(false);
    
        scene.cursor = scene.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D', interact: 'E' });
        
    
        // scene.player.sprite.setSize(26,18).setOffset(scene.player.sprite.width/10+2,35);
    
        scene.physics.add.collider(scene.player.sprite, scene.collisionLayer);
        
        scene.player.toggleGlitchAnim();
    
        scene.cameras.main.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels);
        scene.cameras.main.startFollow(scene.player.sprite);
    
        scene.sys.setActive(false);
    },
}

export default sceneUtils;