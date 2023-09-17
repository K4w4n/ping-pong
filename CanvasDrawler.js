import Drawler from "./Drawler.js";

class CanvasDrawler extends Drawler {

    #canvas;
    #context;

    constructor(canvasSelector) {
        super();
        this.#canvas = document.querySelector(canvasSelector);
        this.#context = this.#canvas.getContext("2d");
    }

    getSize() {
        return {
            width: this.#canvas.width,
            height: this.#canvas.height,
        }
    }

    drawn(entity) {
        const { x, y } = entity.getPosition();
        const { width, height } = entity.getSize();
        this.#context.beginPath();
        this.#context.fillStyle = '#00144b';
        this.#context.rect(x, y, width, height);
        this.#context.fill();

        this.#drawnLogs({ x, y }, { width, height });
    }

    #drawnLogs({ x, y }, { width, height }) {

        // Horizontal
        this.#context.beginPath();
        this.#context.fillStyle = '#00144b10';
        this.#context.rect(0, y, this.#canvas.width, height);
        this.#context.fill();

        // Vertical
        this.#context.beginPath();
        this.#context.fillStyle = '#eb1f0a10';
        this.#context.rect(x, 0, width, this.#canvas.height);
        this.#context.fill();

        // Text
        this.#context.beginPath();
        this.#context.fillStyle = '#000';
        this.#context.fillText(`(${x},${y})`, x, y - 5, 25);
    }

    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

}

export default CanvasDrawler;