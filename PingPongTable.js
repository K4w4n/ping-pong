import Ball from "./Ball.js";
import Drawler from "./Drawler.js";
import LivingCreature from "./LivingCreature.js";

class PingPongTable {

    #playerA = new LivingCreature(10, 30);
    #playerB = new LivingCreature(10, 30);
    #ball = new Ball();
    #drawler = new Drawler();
    #drawing = false;

    constructor() {
        this.setDrawler(this.#drawler);
        this.#ball.setTable(this);
    }

    getPlayers() {
        return [this.#playerA, this.#playerB];
    }

    setPlayers(playerA, playerB) {
        this.#playerA = playerA;
        this.#playerB = playerB;
        this.#playerA.setTable(this)
        this.#playerB.setTable(this)
    }

    getBall() {
        return this.#ball;
    }

    setDrawler(drawler) {
        this.#drawler = drawler;
        this.#playerA.setDrawler(drawler);
        this.#playerB.setDrawler(drawler);
        this.#ball.setDrawler(drawler);
    }

    start() {
        this.#drawing = true;
        this.#loopDrawn();
    }

    #loopDrawn() {
        if (this.#drawing) {
            this.update();
            this.drawn();
            requestAnimationFrame(this.#loopDrawn.bind(this))
        };
    }

    stop() {
        this.#drawing = false;
    }

    update() {
        this.#playerA.update();
        this.#playerB.update();
        this.#ball.update();
    }

    drawn() {
        this.#drawler.clear();
        this.#drawler.drawn(this.#playerA);
        this.#drawler.drawn(this.#playerB);
        this.#drawler.drawn(this.#ball);
    }

}

export default PingPongTable;