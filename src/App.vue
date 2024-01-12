<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue'
import FilmList from "./components/FilmList.vue"
import SeriesList from "./components/SeriesList.vue"
import { store } from "./store.js"
export default{
  components: {
    AppHeader,
    FilmList,
    SeriesList
  },
    data(){
      return{
        store
      }
    },
    methods:{
      getFilmList(){
        let apiUrl = store.endpoint_film
            if (store.search != ""){ 
              console.log(store.search)
              apiUrl += `&query=${store.search}`
            }
            axios.get(apiUrl).then((response) => {         
              store.film = response.data.results
            })
         
        
  
          let apiUrl_series = store.endpoint_series
          console.log(apiUrl_series)
            if (store.search != ""){ 
              console.log(store.search)
              apiUrl_series += `&query=${store.search}`
              console.log(apiUrl_series)
            }
            axios.get(apiUrl_series).then((response) => {         
              store.series = response.data.results
              
            })
          }
        },
    created(){
      this.getFilmList()
    }
  }

</script>   

<template>
  <AppHeader  @SearchSeries=" getFilmList"/>

  <FilmList />
  <SeriesList />
</template>

<style lang="scss" scoped>
@use "./styles/generals.scss";

</style>
