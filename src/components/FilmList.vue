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
        },
   
    Reviews(vote){
      let reviews = Math.ceil(vote.toFixed(0) / 2)
      
      return reviews
    },

    created(){
      this.getFlag()
    }
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
          <div class="card col-3 " v-for="(films, index) in store.film" :key="index" > 
              <div>
              <img :src="getPoster(films)" alt="poster">
            </div> 
            <div class="container-info">

              <!-- TITOLO  -->
             <h2>{{ films.title }} </h2>
              <div>
                <!-- TITOLO ORIGINALE  -->
            {{ films.original_title }}
              </div>
              <div>
              <!-- LINGUA ORIGINALE --> 
             
              <span > <i :class="getFlag(films.original_language)"></i></span>
              </div>
              <div class="mb-2">
              <!-- MIDIA VOTO -->  
                <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 1 ? `giallo` : ``"></i>
                <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 2 ? `giallo` : ``"></i>
                <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 3 ? `giallo` : ``"></i>
                <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 4 ? `giallo` : ``"></i>
                <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 5 ? `giallo` : ``"></i>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    </body>

  </div>
</template>
<style lang ="scss" scoped>
@use '../styles/generals.scss' as *;
.row{
    padding:0;
  }
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
   .card{
    margin: 0
   }
   .container-info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
   }
   i{
    color: black
   }
   .giallo{
    color: yellow
   }
}
</style>

