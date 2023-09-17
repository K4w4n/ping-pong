import LivingCreature from "./LivingCreature.js";

const UP = true;

class Bot extends LivingCreature {
    #direction = UP;

    update() {
        const table = this.getTable();
        const ball = table.getBall();
        const positionBall = ball.getPosition();
        const sizeBall = ball.getSize();
        const { y } = this.getPosition();
        const { height } = this.getSize();

        if ((positionBall.y + sizeBall.height / 2) < (y + height / 2)) this.up();
        else this.down();
    }

    // TODO: Verificar forma melhor de armazenar isso
    #updateByCollision() {
        const { y } = this.getPosition();
        const { height } = this.getSize();
        const sizeContainer = this.getSizeContainer();
        const hasCollision = (y <= 0) || (y >= sizeContainer.height - height);

        if (hasCollision) this.#direction = !this.#direction;

        if (this.#direction) this.up();
        else this.down();
    }
}

export default Bot;