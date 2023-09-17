import Entity from "./Entity.js";

const COLLISION = -1;
const NO_COLLISION = 1;

class Ball extends Entity {

    #collisionX = NO_COLLISION;
    #collisionY = NO_COLLISION;

    #velocityX = 2;
    #velocityY = 2;

    constructor(x = 0, y = 0, width = 5, height = 5) {
        super(x, y, width, height);
    }

    update() {

        const ballInfo = { ...this.getPosition(), ...this.getSize() };
        const ballPosition = { ...ballInfo };
        const sizeContainer = this.getSizeContainer();

        const table = this.getTable();

        const [playerA, playerB] = table.getPlayers();
        const playerAInfo = { ...playerA.getPosition(), ...playerA.getSize() };
        const playerBInfo = { ...playerB.getPosition(), ...playerB.getSize() };

        ballPosition.x += this.#velocityX;
        ballPosition.y += this.#velocityY;

        this.#collisionX
            =
            (ballPosition.x <= 0 || (ballPosition.x + ballInfo.width >= sizeContainer.width))
                || (ballPosition.x <= (playerAInfo.x + playerAInfo.width)
                    && (ballPosition.y >= playerAInfo.y)
                    && (ballPosition.y <= (playerAInfo.y + playerAInfo.height))
                    && (ballPosition.x + ballInfo.width >= playerAInfo.x))
                || (ballPosition.x + ballInfo.width >= playerBInfo.x
                    && ballPosition.y + ballInfo.height >= playerBInfo.y
                    && ballPosition.y < (playerBInfo.y + playerBInfo.height)
                    && ballPosition.x <= playerBInfo.x + playerBInfo.width)
                ? COLLISION : NO_COLLISION;

        this.#collisionY
            = (ballPosition.y <= 0 || (ballPosition.y + ballInfo.height >= sizeContainer.height))
                /* || (newBallPosition.y + ballSize.height >= positionBot.y
                    && newBallPosition.y <= positionBot.y + ballSize.height
                    && newBallPosition.x + ballSize.width >= positionBot.x
                    && newBallPosition.x <= positionBot.x + sizeBot.width
                ) */
                /* || (newBallPosition.y + ballSize.height >= positionPlayer.y
                    && newBallPosition.y <= positionPlayer.y + sizePlayer.height
                    && newBallPosition.x + ballSize.width >= positionPlayer.x
                    && newBallPosition.x <= positionPlayer.x + sizePlayer.width
                ) */
                ? COLLISION : NO_COLLISION;

        this.#velocityX = this.#velocityX * this.#collisionX;
        this.#velocityY = this.#velocityY * this.#collisionY;

        ballPosition.x = this.#collisionX === NO_COLLISION ? ballPosition.x : ballInfo.x;
        ballPosition.y = this.#collisionY === NO_COLLISION ? ballPosition.y : ballInfo.y;

        this.setPosition(ballPosition.x, ballPosition.y);

        if ([this.#collisionX, this.#collisionY].includes(COLLISION)) {
            console.log({ ...this.getPosition(), ...this.getSize(), collisions: { x: this.#collisionX, y: this.#collisionY } });
            // alert();
        }
    }

}

export default Ball;