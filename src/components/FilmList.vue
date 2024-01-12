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
        }
       
  
        if(flag !== "fi fi-gb"  && flag !=="fi fi-es"  && flag !=="fi fi-de" && flag !=="fi fi-it"){
          flag = "fi fi-it"
        }

        return flag
      },
      getPoster(film){
            let poster = `https://image.tmdb.org/t/p/w342${film.poster_path}`
          
            if(film.poster_path === null ){
                poster = "placeholder.jpg"
            }
            return poster
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
      <div class="container">

        <div class="row container-films">
          
          <!-- LISTA CONTENENTE I DATI DEI FILM -->
          <h4 v-if="store.film.length <= 0"> FAI LA TUA PRIMA RICERCA </h4>
          <div class="card col-3 " v-for="(films, index) in store.film" :key="index" id="lista" > 
              <div>
              <img :src="getPoster(films)" alt="poster">
            </div>             
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
              MEDIA VOTO: {{ (films.vote_average).toFixed(3)}}
            </div>
          </div>
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
    h4{
      margin: 30px 0px
    }
   
  
    
    img{
    width: 100%;
    height: 400px
   
   }
   .col-3{
    margin: 0;
   }
}
</style>

