<script>
import { store } from "../store.js"
export default{
    name: "FilmList",
    data(){
      return{
        store
      }
    }
  
}
</script>
<template lang="">
  <div>
    <body>
      <!-- CONTAINER -->
      <div class="container">
        <!--  CONTENITORE DEI FILM -->
        <div class="container-films">
          <span> FAI LA TUA PRIMA RICERCA </span>
          <ul>
            <!-- LISTA CONTENENTE I DATI DEI FILM -->
            <li v-for="films, index in store.film" :key="index" > 
              <!-- TITOLO  -->
              TITOLO: {{ films.title }}
              <div>
              <!-- TITOLO ORIGINALE  -->
              TITOLO ORIGINALE: {{ films.original_title }}
              </div>
              <div>
              <!-- LINGUA ORIGINALE -->
              LINGUA ORIGINALE: {{ films.original_language }}
              </div>
              <div>
              <!-- MIDIA VOTO -->
              MEDIA VOTO: {{ (films.vote_average).toFixed(1)}}
              </div>
          </li>
          </ul>
        </div>
      </div>

      
    </body>

  </div>
</template>
<style lang ="scss" scoped>
@use '../styles/generals.scss' as *;
.container-films{
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    li{
      margin-bottom: 20px
    }
    span{
      margin: 10px
    }
}
</style>

