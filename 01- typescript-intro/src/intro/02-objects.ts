export const pokemonId = [1, 2, 3, 4];

interface Pokemon {
    id: number;
    name: string;
    age?: number; //puede o no estar
}

export const Bulbasaur: Pokemon = {
    id: 5,
    name: 'Quesito',
    age: 3
}

export const Charmander: Pokemon = {
    id: 3,
    name: 'Ramonovich',
}

// export const pokemon = [];

// pokemon.push("ds");

export const pokemons: Pokemon[] = [ //si no le pongo que es un array se crea como un 
    Charmander                       //array de tipo never y me da error cuando intento 
                                    //pushearle cualquier cosa
    
]


