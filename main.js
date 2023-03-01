window.onload = function () {
  // getUser()
  // getUser2()
};

const getUser = () => {
  const randomPoke = Math.floor(Math.random() * 152 + 1);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPokemon1(data);
      pokeData.push(data);
    });
};

const getUser2 = () => {
  const randomPoke2 = Math.floor(Math.random() * 152 + 1);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke2}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPokemon2(data);
      pokeData2.push(data);
    });
};




const displayPokemon1 = (pokemon1) => {
  const firstPlayer = document.getElementById("first-pokemon");
  firstPlayer.innerHTML = "";
  // let container = document.getElementById('pokemon-card1')


  // for (let i = 0; i < 4; i++) {
  //   let randomMoves = Math.floor(Math.random() * pokemon1.moves.length);
  //   const fourMoves = pokemon1.moves[randomMoves].move.name;
  
// };
  const li = document.createElement("li");
  // li.style.backgroundColor = 'lightblue'
  li.style.background = 'rgb(2,0,36)'
  li.style.background ='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(216,240,10,1) 35%, rgba(0,212,255,1) 100%)'
  li.style.border = '3px solid black'
  li.style.borderRadius = '10px'
  li.style.padding = '10px'

  
  
  let lastMove = pokemon1.moves.length-1
  let randomMove = Math.floor(Math.random() * pokemon1.moves.length)
  li.innerHTML = `<h2>${pokemon1.name}</h2><P>Type: ${pokemon1.types[0].type.name}</p><p>HP: ${pokemon1.stats[0].base_stat}</p><p>Height: ${pokemon1.height}</p><p>Weight: ${pokemon1.weight}</p><p>Attack: ${pokemon1.moves[0].move.name}</p><p>Special Attack: ${pokemon1.moves[lastMove].move.name}</p><p>Random Attack: ${pokemon1.moves[randomMove].move.name}</p>`;

  const pokeImage = document.createElement("img");
  pokeImage.classname = "image";
  pokeImage.src = pokemon1.sprites.other.dream_world.front_default;
  // const text = document.createTextNode(`Name: ${pokemon1.name}`)
  // const stats = document.createTextNode(`Stats: ${pokemon1.weight}, ${pokemon1.moves[0].move.name}, ${pokemon1.height}`)

  li.appendChild(pokeImage);
  // li.appendChild(text)
  // li.appendChild(stats)
  firstPlayer.appendChild(li);

}

const displayPokemon2 = (pokemon2) => {
  const secondPlayer = document.getElementById("second-pokemon");
  secondPlayer.innerHTML = "";
  let randomMove = Math.floor(Math.random() * pokemon2.moves.length)
  const li = document.createElement("li");
  li.style.background = 'rgb(247,1,1)'
  li.style.background = 'radial-gradient(circle, rgba(247,1,1,1) 0%, rgba(239,240,10,1) 39%, rgba(0,0,0,1) 100%)'
  // li.style.background = 'rgb(2,0,36)'
  // li.style.background ='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(216,240,10,1) 35%, rgba(0,212,255,1) 100%)'
  li.style.border = '3px solid black'
  li.style.borderRadius = '10px'
  li.style.padding = '10px'

  let lastMove = pokemon2.moves.length-1
  console.log(lastMove)
  li.innerHTML = `<h2>${pokemon2.name}</h2><P>Type: ${pokemon2.types[0].type.name}</p><p>HP: ${pokemon2.stats[0].base_stat}</p><p>Height: ${pokemon2.height}</p><p>Weight: ${pokemon2.weight}</p><p>Attack: ${pokemon2.moves[0].move.name}</p><p>Special Attack: ${pokemon2.moves[lastMove].move.name}</p><p>Random Attack: ${pokemon2.moves[randomMove].move.name}</p>`;

  
 
  const pokeImage = document.createElement("img");
  pokeImage.classname = "image";
  // pokeImage.style.backgroundColor = 'blue'
  pokeImage.src = pokemon2.sprites.other.dream_world.front_default;
  // const text = document.createTextNode(`Name: ${pokemon2.name}`)
  // const move = document.createTextNode(`Move: ${pokemon2.moves[0].move.name}`)
  // const weight = document.createTextNode(`Weight: ${pokemon2.weight}`)

  li.appendChild(pokeImage);
  // li.appendChild(text)
  // li.appendChild(move)
  // li.appendChild(weight)
  secondPlayer.appendChild(li);
};

let pokeData = [];

let pokeData2 = [];

// working battle function (original with multiplication)

// const battleFunction = () => {
//   console.log(pokeData)

//   const pokeOneStats = pokeData[0].stats[1].base_stat * pokeData[0].stats[3].base_stat
//   console.log(pokeOneStats)

//   const pokeTwoStats = pokeData2[0].stats[1].base_stat * pokeData2[0].stats[3].base_stat
//   console.log(pokeTwoStats)

//   if(pokeOneStats > pokeTwoStats) {
//     document.getElementById('results').innerHTML = `${pokeData[0].name} is the winner!`
//   } else if(pokeTwoStats > pokeOneStats) {
//     document.getElementById('results').innerHTML = `${pokeData2[0].name} is the winner!`
//   } else {
//     document.getElementById('results').innerHTML = `They both fainted!`
//   }

// }

const battleFunction = () => {
  console.log(pokeData);

  const pokeOneStats =
    pokeData[0].stats[1].base_stat + pokeData[0].stats[3].base_stat + pokeData[0].stats[5].base_stat + pokeData[0].stats[4].base_stat + pokeData[0].stats[2].base_stat + pokeData[0].stats[0].base_stat - pokeData[0].stats[5].effort - pokeData[0].stats[4].effort - pokeData[0].stats[3].effort - pokeData[0].stats[2].effort - pokeData[0].stats[1].effort - pokeData[0].stats[0].effort;
  console.log(pokeOneStats);

  const pokeTwoStats =
    pokeData2[0].stats[1].base_stat + pokeData2[0].stats[3].base_stat + pokeData2[0].stats[5].base_stat + pokeData2[0].stats[4].base_stat + pokeData2[0].stats[2].base_stat + pokeData2[0].stats[0].base_stat - pokeData2[0].stats[5].effort - pokeData2[0].stats[4].effort - pokeData2[0].stats[3].effort - pokeData2[0].stats[2].effort - pokeData2[0].stats[1].effort - pokeData2[0].stats[0].effort;
  console.log(pokeTwoStats);
  document.getElementById('results').style.background = 'rgb(2,0,36)' 
 
  document.getElementById('results').style.background ='red'
  if (pokeOneStats > pokeTwoStats) {
    document.getElementById(
      "results"
    ).innerHTML = `${pokeData[0].name} is the winner!`;
  } else if (pokeTwoStats > pokeOneStats) {
    document.getElementById(
      "results"
    ).innerHTML = `${pokeData2[0].name} is the winner!`;
  } else {
    document.getElementById("results").innerHTML = `They both fainted!`;
  }

};

const reset = () => {
  document.getElementById('first-pokemon').innerHTML = ""
  document.getElementById('second-pokemon').innerHTML = ""
  document.getElementById('results').innerHTML = ""
  
  pokeData = [];
  pokeData2 = [];

  document.getElementById('results').style.background = 'transparent'
}

// let electric = {
//   elctric: .75,
//   fire: 1,
//   water: 2,
//   grass: .5,
//   rock: .25,
//   normal: 1,
//   fighting: 1,
//   ghost: 1,
//   flying: 2,
//   poison: 1,
//   ground: .5,
//   bug: 1,
//   steel: 1.5,
//   psychic: 1,
//   dark: 1,
//   fairy: 1,
//   dragon: .5,
//   ice: 1.5,

// }

// let fire = {
//   elctric: 1,
//   fire: .75,
//   water: .25,
//   grass: 2,
//   rock: .25,
//   normal: 1,
//   fighting: 1,
//   ghost: 1,
//   flying: 2,
//   poison: 1,
//   ground: .5,
//   bug: 2,
//   steel: 2,
//   psychic: 1,
//   dark: 1,
//   fairy: 1,
//   dragon: .25,
//   ice: 2,

// }

// let water = {
//   elctric: .5,
//   fire: 2,
//   water: .75,
//   grass: .25,
//   rock: 2,
//   normal: 1,
//   fighting: 1,
//   ghost: 1,
//   flying: 2,
//   poison: 1,
//   ground: 2,
//   bug: 2,
//   steel: 1.5,
//   psychic: 1,
//   dark: 1,
//   fairy: 1,
//   dragon: .25,
//   ice: 2,

// }

// let fighting = {
//   elctric: 1,
//   fire: 2,
//   water: 1,
//   grass: 1,
//   rock: 2,
//   normal: 2,
//   fighting: .75,
//   ghost: .25,
//   flying: .25,
//   poison: .25,
//   ground: 2,
//   bug: .5,
//   steel: 2,
//   psychic: .25,
//   dark: 2,
//   fairy: .25,
//   dragon: 1,
//   ice: 2,
// }


