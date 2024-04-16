<template>

<div class="intro">

        <div class="buttons-container">
          <button class="button" @click="busca">Busca un pokemon</button>
          <button class="button" @click="adivina">Adivina el pokemon</button>
        </div>

        <div class="historia">
          <p>la historia del pokemon comienza en Japón, país en el que un amante de los videojuegos 
            llamado Satoshi Tajiri, con apenas 25 años tuvo la idea de diseñar un sistema en el que varios
             jugadores pudieran interactuar en un mundo compartido.</p>
        </div>
  
        <div class="">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvowE3orK5uSlgkuo16NSYvfjAIbuPiPaHWv0EV1bag&s">
        </div>

      </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  const imagenActual = ref('');
  const nombrePokemon = ref('');
  
  const busca = () => {
    router.push('/busca');
  }
  
  const adivina = () => {
    router.push('/adivina');
  }
  
  onMounted(async () => {
    await cambiarImagen(); // Cargar la primera imagen al iniciar el componente
    setInterval(cambiarImagen, 3000); // Cambiar la imagen cada 3 segundos
  });
  
  async function cambiarImagen() {
    try {
      const idAleatorio = Math.floor(Math.random() * 1024) + 1;
      const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
      const pokemonData = resultado.data;
      imagenActual.value = pokemonData.sprites.other['official-artwork'].front_default;
      nombrePokemon.value = pokemonData.name;
    } catch (error) {
      console.log(error);
    }
  }
  </script>
  
  
  <style>
  
  body {
    background: linear-gradient(to top right, #43389f 0%, #4ec6ca 100%);
  }
  

  .intro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .historia{
    text-align: center;
  font-size: 20px;
  padding-top: 2%;
  color:white;
  }
  
  .buttons-container {   
    width: 30%;
    height:20%;
    display: flex;
  }
  
  .button {
width:15vw;
height: 11vh;
padding: 10px 20px;
    margin: 6%;
    background: linear-gradient(to top right, #551fe9 0%, #8906e0 100%);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
  
    background-color: red;
transform: scale(1.1);  
  }
  
  @media (max-width: 1000px) {
    .imagenFondo {
      transform: scale(.7);
    }
  
    .button {
      font-size: 200%;
    }
    .containerImagen p{
  font-size: 300%;
  
  }
  }
  </style>
  