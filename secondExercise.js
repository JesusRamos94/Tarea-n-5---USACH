// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

const pokemones = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

const newPokemonArray = ( pokemon ) => {
return pokemon.map(e => e.toUpperCase());
};

console.log(newPokemonArray(pokemones));


