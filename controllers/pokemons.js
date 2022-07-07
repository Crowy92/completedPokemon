const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon')

//Pokemon
router.get('/', (req, res) => {
    console.log(req.query);
    res.send(Pokemon.all)
})

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedPokemon = Pokemon.findById(id);
        if (!selectedPokemon) {
            throw new Error('This pokemon does not exist')
        }
        res.send(selectedPokemon)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

router.post('/', (req, res) => {
    const data = req.body;
    const newPoke = Pokemon.create(data);
    res.status(201).send(newPoke);
});

router.delete('/:id', (req, res) => {
    const pokeId = parseInt(req.params.id);
    const pokeToDestroy = Pokemon.findById(pokeId);
    pokeToDestroy.destroy();
    res.status(204).send();
});

module.exports = router;