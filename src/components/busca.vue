  <template>
    <div class="contenedorPrincipal">
      <div class="buscador">
    <input type="text" placeholder="Busca un pokemon" id="buscadorinput" v-model.trim="buscador">
  <button id="boton" @click="traer()"><img id="logito" src="https://codeboost.com.br/projetos/pokeapi/img/img-pokeball-02.png"></button>
    </div>
    
      <div class="card">
          <div class="imagenes">
            <div class="imgprincipal">
        <img id="imgprincipal" :src="pokemon.sprites.front_shiny" alt="" v-if="pokemon.sprites">
      </div>
        <img id="imgdetras":src="pokemon.sprites.other.showdown.front_shiny" alt="" v-if="pokemon.sprites">
        <img id="imgdetras":src="pokemon.sprites.other.showdown.back_shiny" alt="" v-if="pokemon.sprites">
      </div>
      <div  class="datos" v-if="showcard">
        <div class="nombre">{{ pokemon.name }}</div>
        <div class="tipo" v-for="(e, i) in pokemon.types" :key="i">Tipo: {{ e.type.name }} </div>
            <div class="peso">Peso: {{ pokemon.weight }}</div>
          </div>
        <section class="linear-progress-section">
          <div class="linear-progress" v-for="(e, i) in pokemon.stats" :key="i">
            <label :for="'ID' + i" rounded size="13px" color="purple" class="stat-name text-xs font-semibold text-white" >{{ e.stat.name }}</label>
            <q-linear-progress :id="'ID' + i" :value="progressValue(e.base_stat)" :buffer="bufferValue(e.base_stat + 10)" rounded size="15px" color="purple">
              <div class="absolute-full flex flex-center">
                <q-badge color="black" text-color="white" :label="e.base_stat" />
              </div>
            </q-linear-progress>
          </div>
        </section>
  
    </div>

    </div>
  </template>
  
 <script setup>
  import {ref} from "vue"
  import axios from "axios"
  
  let pokemon = ref([])
  let buscador = ref([])
  let showcard = ref(false);
  
  
  
  async function traer() {
    try {
      let r = await axios.get("https://pokeapi.co/api/v2/pokemon/"+buscador.value)
      pokemon.value=r.data
      console.log(r.data);
    } catch (error) {
      console.log(error);
    } 
    showcard.value=true
  
  }
  const progressValue=(baseStat)=>`0.${baseStat}`
  const bufferValue=(baseStat)=>`0.${baseStat+10}`
  
  </script>
  
  <style>
  

  .card{
    width: 80vw;
    height: 57vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-top: 4%;


  }

  .buscador {
    margin-left: auto;
    margin-right: auto;
    width: 17vw;
    height:8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.5);
    margin-top:1%;

  
  }
  
  #logito{
    width:5vmax;
    height:4vmax;
    cursor: pointer;
    box-sizing: border-box;
    padding: 78%;
    border:none;
    outline: none;
  }
  
  
  #boton{
    width:2vmax;
    height:2vmax;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    border:none;
    outline: none;
  }
  #boton:hover{
    border:none;
    outline:none;
    transform: scale(0.7)
  }
  #buscadorinput{
    width:85%;
    height:90%;
    background-color: cadetblue;
    color:black;
    border: 3px solid cadetblue;
    box-sizing: border-box;
    padding-left: 3%;
  
  }
  
  .datos{
    width:50vh;
    height:30vh;
    display:flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    color:white;
    }
  .tipo{
    font-size: 20px;
  
  }
  .nombre{
  color:purple;
  font-weight: 700;
  font-size:45px;
  /* backdrop-filter: blur(55px); */
  text-transform:uppercase;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  white-space: nowrap;
  width:12ch;
  animation:typing 2s steps(12),
  blink .5s infinite step-end alternate;
  overflow: hidden;
  }
  @keyframes typing{
  from {width:0}
}
@keyframes blink{
  50%{border-color: transparent;}
}
  .peso{
  /* text-decoration: underline; */
  font-size: 17px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  }
  .imagenes{
    width:50vh;
    height:100%;
  }
  section{
    width:60vh;
    height:100%;
    box-sizing: border-box;
    top: 5%;
    color:white
  }
  .imgprincipal{
    width:100%;
    height:60%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #imgprincipal{
    margin-top: -22%;
    aspect-ratio: 16/9;
    width:400px;
    height:250px;
    filter: drop-shadow(
      0 0 10px rgb(0, 0, 0, .8)
    )
  }
  
  #imgdetras{
    width:40%;
    height:30%;
  }
  .linear-progress{
  padding: 2%;
  }
  
  </style>