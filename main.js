import CanvasDrawler from "./CanvasDrawler.js";
import Game, { MULTI_PLAYER, NO_PLAYER, SINGLE_PLAYER } from "./Game.js";

const game = new Game(MULTI_PLAYER);
const drawler = new CanvasDrawler('canvas');

game.setDrawler(drawler);
game.start();