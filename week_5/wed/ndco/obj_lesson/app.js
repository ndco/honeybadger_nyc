console.log('loaded');


// const pikachu2 = PokemonFactory(25, 'pikachu', 'light', 'kick', 100);



const squirtle = {
    //ATT
    number: 7,
    name: 'Squirtle',
    type: 'water',
    moves: ['water gun', 'bite', 'tackle', 'hide'],
    hp: 100,
    
    //BEHAVIOR
    takeDamage: function () {
        this.hp -= 10;
    },
    visitPokeCenter: function () {
        this.hp = 100;
    },
    isFainted: function () {
        return this.hp <= 0;
    }
    
}

function PokemonFactory(num, name, type, moves, hp) {
    this.num = num;
    this.name = name;
    this.type = type;
    this.moves = moves;
    this.hp = hp;
};

const pikachu = PokemonFactory(25, 'pikachu','light',['tackle', '100 bolt light', 'kick'], 100);






const lamp = {
    wattage: 300,
    on: false,
    turnOff: function() {
        this.on = false;
    },
    turnOn: function() {
        this.on = true;
    },
    status: function() {
        this.on === true ? console.log('the light is on') : console.log('the light is off');
    }
}




// num > 10 ? console.log('this num is big') : console.log('this num is small');


const apartment = {
    unitNum:'10A',
    unitNum:'11C',
    unitType:'Studio',
    floorNum:'10',
    numOfBath:'1',
    laundryInUnit:false,
    monthlyRent: 1000

}


const mustang = {
    color:'red',
    class:'muscle',
    horsepower:300
};

const toyota = {
    color:'white',
    class:'sport',
    horsepower:280
};

const gallardo = {
    color:'black',
    class:'exotic',
    horsepower:450
};