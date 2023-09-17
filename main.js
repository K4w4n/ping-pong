import CanvasDrawler from "./CanvasDrawler.js";
import Game from "./Game.js";

const game = new Game('canvas');
const drawler = new CanvasDrawler('canvas');

game.setDrawler(drawler);
game.start();