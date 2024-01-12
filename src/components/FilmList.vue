<script>
import FlagIcon from 'vue-flag-icon' ;
import { store } from "../store.js"
export default{
    name: "FilmList",
    components:{
      FlagIcon
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getFlag(film){
        let flag = `fi fi-${film}`
        if(flag === "fi fi-en"){
          flag = `fi fi-gb`
          console.log(flag)
        }
        if(flag === "fi fi-ko"){
          flag = `fi fi-kr`
          console.log(flag)
        }
   
        console.log(flag)
        return flag
      }
    },

    created(){
      this.getFlag()
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
            <li v-for="films, index in store.film" :key="index" id="lista" > 
              <!-- TITOLO  -->
              TITOLO: {{ films.title }} 
              <div>
              <!-- TITOLO ORIGINALE  -->
              TITOLO ORIGINALE: {{ films.original_title }}
              </div>
              <div>
              <!-- LINGUA ORIGINALE --> 
              LINGUA ORIGINALE: 
              <span > <i :class="getFlag(films.original_language)"></i></span>
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

