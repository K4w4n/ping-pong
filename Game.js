import Bot from "./Bot.js";
import Player from "./Player.js";
import ControlKeyboard from "./ControlKeyboard.js";
import PingPongTable from "./PingPongTable.js";

class Game {

    #table = new PingPongTable();

    constructor() {
        const control = new ControlKeyboard();
        const player = new Player(10, 30, 5, 30);
        player.setControl(control);
        const bot = new Bot(280, 30, 5, 30);
        this.#table.setPlayers(player, bot);
    }

    setDrawler(drawler) {
        this.#table.setDrawler(drawler);
    }

    start() {
        this.#table.start();
    }

    stop() {
        this.#table.stop();
    }
}

export default Game;