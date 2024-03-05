//DESARROLLA AQUI TUS SOLUCIONES

//EJERCICIO POKEMON
//ejercicio 1


async function getRandomPokemon() {
    try {
        // read our JSON
        let randomNum = Math.floor(Math.random() * (1025));
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        return await response.json();
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}


//ejercicio 2

async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}


//ejercicio 3

async function printImageAndName() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    console.log(img);
    let cards = "";
    return cards += `<section>
               <img src="${img}" alt="${name}">
               <h1>${name}</h1>
               </section>`

}


//EJERCICIO BATALLA ENTRE POKEMON Y PERRITO

//ejercicio 4

async function getRandomDogImage() {
    try {
        // read our JSON
        let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        let data = await response.json();
        return data.message;
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}

//ejercicio 5

async function getRandomPokemonImage() {
    try {
        // read our JSON
        let randomNum = Math.floor(Math.random() * (1025));
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        let data = await response.json();
        return data.sprites.front_default;
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}

//ejercicio 6

async function printPugVsPikachu() {
    try {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        let data = await response.json();
        let img = data.sprites.front_default;
        console.log(img);

        let response2 = await fetch(`https://dog.ceo/api/breed/pug/images`)
        let data2 = await response2.json();
        let img2 = data2.message[4];

        let cards = "";
        cards += `<section>
               <img src="${img}" >
               <h1>VERSUS</h1>
               <img src="${img2}" >
               </section>`

        return document.getElementsByTagNameNS("body").innerHTML += cards;
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}


//ejercicio 7 

async function getRandomCharacter() {
    try {
        // read our JSON
        let randomCharacter = Math.floor(Math.random() * (826));
        let response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacter}`);
        return await response.json();
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}

//ejercicio 8

async function getRandomCharacterInfo() {
    try {

        let response = await fetch(`https://rickandmortyapi.com/api`)
        let data = await response.json();
        let name = data.name;
        let img = data.image;
        let episodes = data.episode;
        let firstEpisode = data.episode[0];
        let dateEpisodeLink = await fetch(firstEpisode)
        let dataEpisode = await dateEpisodeLink.json()
        let dateEpisode = dataEpisode.air_date


        return { name, img, episodes, firstEpisode, dateEpisode }
    }
    catch (error) {
        console.log(`ERROR: error`);
    }
}

