import Control from "./Control.js";

class ControlKeyboard extends Control {
    #keys = {};
    #actionList = {
        "up": "ArrowUp",
        "down": "ArrowDown",
    }

    constructor() {
        super();
        this.#addEvents();
    }

    action(actionName) {
        const keyName = this.#actionList[actionName];
        return this.#keys[keyName];
    }

    #addEvents() {

        addEventListener('keydown', (event) => {
            this.#keys[event.key] = true;
        });

        addEventListener('keyup', (event) => {
            this.#keys[event.key] = false;
        });
    }
}

export default ControlKeyboard;