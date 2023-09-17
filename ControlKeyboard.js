import Control, { UP, DOWN } from "./Control.js";

const KEY_UP = 'ArrowUp';
const KEY_DOWN = 'ArrowDown';

class ControlKeyboard extends Control {
    #keys = {};
    #actionList = {};

    constructor() {
        super();
        this.setAction(KEY_UP, UP);
        this.setAction(KEY_DOWN, DOWN);
        this.#addEvents();
    }

    setAction(key, action) {
        this.#actionList[action] = key;
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

export { KEY_UP, KEY_DOWN };

export default ControlKeyboard;