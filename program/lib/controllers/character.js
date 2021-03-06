class Character extends Obstruct {
    distance = null;

    directionSet = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, -1],
        down: [0, 1],
        left_up: [-1, -1],
        left_down: [-1, 1],
        right_up: [1, -1],
        right_down: [1, 1]
    };

    constructor (id="character", className="character", type="obstruct") {
        super(id=id, className=className, type=type);
        
        this.setDistance(15);
        this.setFlippable(true);
        this.setSpeed(2.0);
        this.setSize(150, 150);
        this.setPosition(0, 0);
    }

    setDistance (value) {
        this.distance = value; 
    }

    moveSet (key) {
        this.movement(
            this.x + this.directionSet[key][0]*this.distance, 
            this.y + this.directionSet[key][1]*this.distance
        );
    }


}