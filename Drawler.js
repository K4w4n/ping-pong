class Drawler {

    getSize() {
        return { width: 10, height: 10 };
    }

    drawn(entity) {
        console.log(entity.getPosition(), entity.getSize());
    }

    clear() {
        console.log("Clear");
    }
}

export default Drawler;