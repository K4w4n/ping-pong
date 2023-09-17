import Entity from "./Entity.js";

class LivingCreature extends Entity {

    constructor(x = 0, y = 0, width = 10, height = 10) {
        super(x, y, width, height);
    }

    up() {
        const { x, y } = this.getPosition();
        this.setPosition(x, y - 2);
    }

    down() {
        const { x, y } = this.getPosition();
        this.setPosition(x, y + 2);
    }
}

export default LivingCreature;