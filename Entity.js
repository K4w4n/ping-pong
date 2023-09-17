class Entity {
    #x = 0;
    #y = 0;
    #width = 10;
    #height = 10;
    #drawler;
    #table;

    constructor(x = 0, y = 0, width = 10, height = 10) {
        this.#width = width;
        this.#height = height;
        this.#x = x;
        this.#y = y;
    }

    setDrawler(drawler) {
        this.#drawler = drawler;
    }

    setTable(table) {
        this.#table = table;
    }

    getTable() {
        return this.#table;
    }

    getPosition() {
        return {
            x: this.#x,
            y: this.#y,
        }
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
        this.#limitMovement();
    }

    getSize() {
        return {
            width: this.#width,
            height: this.#height,
        }
    }

    update() {
        this.#limitMovement();
    }

    #limitMovement() {
        if (!this.#drawler) return;
        const sizeDrawler = this.#drawler.getSize();
        this.#x = Math.max(0, this.#x);
        this.#x = Math.min(sizeDrawler.width - this.#width, this.#x);
        this.#y = Math.max(0, this.#y);
        this.#y = Math.min(sizeDrawler.height - this.#height, this.#y);
    }

    getSizeContainer() {
        return this.#drawler.getSize();
    }

}

export default Entity;