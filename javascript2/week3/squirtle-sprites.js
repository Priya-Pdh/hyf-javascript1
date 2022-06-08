'use strict';


function fetchPokemonData() {
  return '{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}';
}

const pokemonData = JSON.parse(fetchPokemonData());
console.log(pokemonData);


 //create img element and get the src of the pokemon img
  
const parent = document.querySelector("body")
const myDiv = document.createElement("div")

const heading1 = document.createElement("h1")
heading1.innerText = "Pokemon Game"

const heading2 = document.createElement("h2")
heading2.innerText = pokemonData.name.toUpperCase()

const imageWrapper = document.createElement("div")
imageWrapper.setAttribute = ("class", "imageDiv")

const image1 = document.createElement("img")
image1.src = pokemonData.sprites.back_default

const image2 = document.createElement("img")
image2.src = pokemonData.sprites.back_shiny

//creating buttons to trigger the img
const button1 = document.createElement("button")
button1.innerText = "Turn me front"

const button2 = document.createElement("button")
button2.innerText = "Turn me back"

parent.appendChild(myDiv)
parent.appendChild(imageWrapper) 
myDiv.appendChild(heading1)
myDiv.appendChild(heading2)    
myDiv.prepend(image1) 
myDiv.prepend(image2) 
myDiv.appendChild(button1)
myDiv.appendChild(button2)


//adding function to the buttons and adding pokemon images which is looking front and back so it looks like it is turning back and forth
     

button1.addEventListener("click", () => {

  const image3 = document.createElement("img")
  image3.src = pokemonData.sprites.front_default
  
  const image4 = document.createElement("img")
  image4.src = pokemonData.sprites.front_shiny

  myDiv.appendChild(image4)
  myDiv.appendChild(image3) 
  
})


button2.addEventListener("click", () => {

let image5 = document.createElement("img")
image5.src = pokemonData.sprites.back_default

let image6 = document.createElement("img")
image6.src = pokemonData.sprites.back_shiny
  myDiv.appendChild(image5)
  myDiv.appendChild(image6) 
  
})

