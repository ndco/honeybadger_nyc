//I want my snowman builder to create a snowman object
//My winter wonderland is a friendly place, so I want each snowman to have a name
//In order for it to really be a snowman, it needs to have a carrot nose.
//It also needs stick arms.
//If the snowman is named Olaf, he should like warm hugs.

class Snowman {
    constructor(name) {
        this.name = name;
        this.hasCarrotNose = true;
        this.hasStickArms = true;
    }

    likesWarmHugs() {
        return this.name === 'Olaf';
    }
    
}

module.exports = Snowman;