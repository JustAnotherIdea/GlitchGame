import '/css/style.css'
import Phaser from 'phaser'
import StartScene from './startScene';
import TownScene from './sceneTown';
import House1Scene from './sceneHouse1';

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
          debug:false,
        }
    },
    scene: [StartScene, TownScene, House1Scene]
}

const game = new Phaser.Game(config);
