window.onload = function() {
    // getUser()
    // getUser2()
}

const getUser = () => { 
  const randomPoke = Math.floor((Math.random() * 100) + 1);
     fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          displayPokemon1(data)
          pokeData.push(data)
            
            
        })

        
}

const getUser2 = () => { 
  const randomPoke2 = Math.floor((Math.random() * 100) + 1)
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke2}`)
     .then((response) => response.json())
     .then((data) => {
       console.log(data)
       displayPokemon2(data)
       pokeData2.push(data)
         
         
     })

     
}




const displayPokemon1 = (pokemon1) => {

    const firstPlayer = document.getElementById('first-pokemon')
    firstPlayer.innerHTML = ''
    const li = document.createElement('li')


      const pokeImage = document.createElement('img')
      pokeImage.classname = 'image'
      pokeImage.src = pokemon1.sprites.other.dream_world.front_default
      const text = document.createTextNode(`Name: ${pokemon1.name}`)
      const stats = document.createTextNode(`Stats: ${pokemon1.weight}, ${pokemon1.moves[0].move.name}, ${pokemon1.height}`)

      li.appendChild(pokeImage)
      li.appendChild(text)
      li.appendChild(stats)
      firstPlayer.appendChild(li)


}

const displayPokemon2 = (pokemon2) => {

  const secondPlayer = document.getElementById('second-pokemon')
  secondPlayer.innerHTML = ''
  const li = document.createElement('li')


    const pokeImage = document.createElement('img')
    pokeImage.classname = 'image'
    pokeImage.src = pokemon2.sprites.other.dream_world.front_default
    const text = document.createTextNode(`Name: ${pokemon2.name}`)
    const stats = document.createTextNode(`Stats: ${pokemon2.weight}, ${pokemon2.moves[0].move.name}, ${pokemon2.height}`)

    li.appendChild(pokeImage)
    li.appendChild(text)
    li.appendChild(stats)
    secondPlayer.appendChild(li)
}


const pokeData = []

const pokeData2 = []

// working battle function 

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
  console.log(pokeData)

  const pokeOneStats = pokeData[0].stats[1].base_stat * pokeData[0].stats[3].base_stat
  console.log(pokeOneStats)

  const pokeTwoStats = pokeData2[0].stats[1].base_stat * pokeData2[0].stats[3].base_stat
  console.log(pokeTwoStats)

  if(pokeOneStats > pokeTwoStats) {
    document.getElementById('results').innerHTML = `${pokeData[0].name} is the winner!`
  } else if(pokeTwoStats > pokeOneStats) {
    document.getElementById('results').innerHTML = `${pokeData2[0].name} is the winner!`
  } else {
    document.getElementById('results').innerHTML = `They both fainted!`
  }

}