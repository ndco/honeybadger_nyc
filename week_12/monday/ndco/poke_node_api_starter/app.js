// import { STATUS_CODES } from 'http';

const express = require('express');
const logger = require('morgan');
const app = express();
const pokemon = require('./data/poke_array');

app.use(logger('dev'));

// INDEX ROUTE FOR THE POKEMON SHOULD SEND ALL THE POKEMON TO THE USER
app.get('/pokemons', function (req, res) {
    res.send(pokemon);
});

// BE ABLE TO SEARCH FOR A POKEMON BY NAME
app.get('/pokemons/byName/:name', function (req, res) {
    const name = req.params.name;
    for (let i = 0; i < pokemon.length; i ++) {
        if (pokemon[i].name.toLowerCase() === name.toLowerCase()) {
            res.send(pokemon[i]);
        }
    }
});



// BE ABLE TO SEARCH FOR A POKEMON BY ID
// BE ABLE TO SEARCH FOR A POKEMON BY TYPE
// '/pokemons/byType/:type'
app.get('/pokemons/byType/:type', function (req, res) {
    const type = req.params.type;
    const pokemonType = pokemon.type;

    console.log(type);
    console.log(pokemonType);

    res.send('sent')
    // for (let i = 0; i < pokemon.length; i++) {
    //     if (pokemon[i].name.toLowerCase() === name.toLowerCase()) {
    //         res.send(pokemon[i]);
    //     }
    // }
});



// BE ABLE TO GET A RANDOM POKEMON
'/pokemons/random'
'/pokemons/:id'

app.listen(3000);
