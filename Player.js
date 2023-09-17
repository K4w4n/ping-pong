import Control, { DOWN, UP } from "./Control.js";
import LivingCreature from "./LivingCreature.js";

class Player extends LivingCreature {
    #control = new Control();

    constructor(x = 0, y = 0, width = 10, height = 10) {
        super(x, y, width, height);
    }

    setControl(control) {
        this.#control = control;
    }

    update() {
        if (this.#control.action(UP)) this.up();
        if (this.#control.action(DOWN)) this.down();
    }

}

export default Player;