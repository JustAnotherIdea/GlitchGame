import '/css/style.css'
import Phaser from 'phaser'
import Game from './game';

const sizes =
{
    width: 768,
    height: 768
};

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.height,
    canvas: gameCanvas,
    scene: [Game]
}

const game = new Phaser.Game(config);
