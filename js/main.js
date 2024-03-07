import '/css/style.css'
import Phaser from 'phaser'
import StartScene from './startScene';
import TownScene from './sceneTown';

const sizes =
{
    width: window.innerWidth,
    height: window.innerHeight
};

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.height,
    canvas: gameCanvas,
    physics:{
        default:"arcade",
        arcade:{
          debug:true,
        }
    },
    scene: [ TownScene]
}

const game = new Phaser.Game(config);
