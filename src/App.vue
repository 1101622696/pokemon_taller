<template>
  <div >
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-blue-4 text-WHITE">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://user-images.githubusercontent.com/9741252/81717987-83b84000-947b-11ea-9ac9-5ad1d59adf7a.png">
          </q-avatar>
          POKEMONN!!!
        </q-toolbar-title>
      </q-toolbar>
  

      <q-tabs align="left">
        <q-route-tab to="/" label="bienvenida" />
        <q-route-tab to="/busca" label="busca" />
        <q-route-tab to="/adivina" label="adivina" />
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view> </router-view >
    </q-page-container>

    <q-footer class="bg-blue-3 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://codeboost.com.br/projetos/pokeapi/img/img-pokeball-02.png">
          </q-avatar>
          <div>POKEDEX!!!</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped>
footer{
  text-align: center;
}
header{
  text-align: center;
}



</style>
