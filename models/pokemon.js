const pokeData = require('../data/pokemon')

class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
    }

    static get all() {
        const pokemon = pokeData.map(poke => new Pokemon(poke))
        return pokemon;
    }

    static findById(id) {
        const pokemonData = pokeData.filter((poke) => poke.id === id)[0];
        if (!pokemonData) {
            return;
        }
        const pokemon = new Pokemon (pokemonData);
        return pokemon
    }

    static create(poke) {
        const newPokeId = pokeData.length + 1;
        const newPoke = new Pokemon({ id: newPokeId, ...poke });
        pokeData.push(newPoke);
        return newPoke;
    }

    destroy() {
        const pokemon = pokeData.filter((poke) => poke.id === this.id)[0];
        pokeData.splice(pokeData.indexOf(pokemon), 1);
    }
}

module.exports = Pokemon