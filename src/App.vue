<script>
import axios from "axios";

import AppHeader from './components/AppHeader.vue'

import FilmList from "./components/FilmList.vue"

import { store } from "./store.js"
export default{
  components: {
    AppHeader,
    FilmList
  },
    data(){
      return{
        store
      }
    },
    methods:{
      getFilmList(){
        let apiUrl = store.endpoint_film
        console.log(apiUrl)
            if (store.search != ""){ 
              console.log(store.search)
              apiUrl += `&query=${store.search}`
              console.log(apiUrl)
            }
            axios.get(apiUrl).then((response) => {         
              store.film = response.data.results
            })
      }
    },
    created(){
      this.getFilmList()
    }
}
</script>

<template>
  <AppHeader  @SearchFilm="getFilmList"/>
  <FilmList />
</template>

<style lang="scss" scoped>
@use "./styles/generals.scss";

</style>
