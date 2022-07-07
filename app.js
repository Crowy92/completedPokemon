const express = require('express');
const app = express();
const data = require('./data/pokemon')
const pokemonRoutes = require('./controllers/pokemons')
//for Parsing data that comes from the user add after failing to send data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// add later after connecting front end
let cors = require("cors");
app.use(cors());

//Home
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!');
})

app.use('/pokemon', pokemonRoutes)
//Pokemon
/*app.get('/pokemon', (req, res) => {
    res.send(data)
})

app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id - 1;
    if (id < data.length){
        res.send(data[id])
    } else {
        res.status(404).send('Not found!');
    }
})*/


module.exports = app;