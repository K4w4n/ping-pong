import Bot from "./Bot.js";
import Player from "./Player.js";
import ControlKeyboard, { KEY_DOWN, KEY_UP } from "./ControlKeyboard.js";
import PingPongTable from "./PingPongTable.js";
import { DOWN, UP, KEY_W, KEY_S } from "./Control.js";

const SINGLE_PLAYER = 0;
const MULTI_PLAYER = 1;
const NO_PLAYER = 2;

class Game {

    #table = new PingPongTable();

    constructor(gameMode) {
        const modes = {
            [SINGLE_PLAYER]: this.singlePlayer.bind(this),
            [MULTI_PLAYER]: this.multiPlayer.bind(this),
            [NO_PLAYER]: this.noPlayer.bind(this),
        };
        modes[gameMode]();
    }

    singlePlayer() {
        const playerA = new Player(10, 30, 5, 30);
        const playerB = new Bot(280, 30, 5, 30);

        const controlA = new ControlKeyboard();
        controlA.setAction(KEY_UP, UP);
        controlA.setAction(KEY_DOWN, DOWN);

        playerA.setControl(controlA);

        this.#table.setPlayers(playerA, playerB);
    }

    multiPlayer() {
        const playerA = new Player(10, 30, 5, 30);
        const playerB = new Player(280, 30, 5, 30);

        const controlA = new ControlKeyboard();
        const controlB = new ControlKeyboard();

        controlA.setAction(KEY_W, UP);
        controlA.setAction(KEY_S, DOWN);

        controlB.setAction(KEY_UP, UP);
        controlB.setAction(KEY_DOWN, DOWN);

        playerA.setControl(controlA);
        playerB.setControl(controlB);

        this.#table.setPlayers(playerA, playerB);
    }

    noPlayer() {
        const playerA = new Bot(10, 30, 5, 30);
        const playerB = new Bot(280, 30, 5, 30);

        this.#table.setPlayers(playerA, playerB);
    }

    setDrawler = this.#table.setDrawler.bind(this.#table);

    start = this.#table.start.bind(this.#table);

    stop = this.#table.stop.bind(this.#table);
}

export {
    SINGLE_PLAYER,
    MULTI_PLAYER,
    NO_PLAYER,
}
export default Game;