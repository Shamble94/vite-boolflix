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

      <div class="container">

        <div class="row container-films ">
          
          
          <h4 v-if="store.film.length <= 0"> FAI LA TUA PRIMA RICERCA </h4>
          <div class="card  col-4 col-md-3 col-lg-2" v-for="(films, index) in store.film" :key="index" > 
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img :src="getPoster(films)" alt="poster">
                </div>

                <div class="flip-card-back">
                  <div class="container-info">

                    <div class="back">
                    
                      <h5>{{ films.title }} </h5>
                      <div>
                      
                        {{ films.original_title }}
                      </div>
                      <div>

                      <span > <i :class="getFlag(films.original_language)"></i></span>
                      </div>
                      <div>
                        <span> {{ films.overview }}</span>
                      </div> 
                      <div class="mb-2">
                    
                        <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 1 ? `giallo` : `bianco`"></i>
                        <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 2 ? `giallo` : `bianco`"></i>
                        <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 3 ? `giallo` : `bianco`"></i>
                        <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 4 ? `giallo` : `bianco`"></i>
                        <i class="bi bi-star-fill" :class = "Reviews(films.vote_average) >= 5 ? `giallo` : `bianco`"></i>
                      </div>
                    </div>
                  </div>            
                  
                </div>
              </div>
            </div>
          </div>
        </div>        
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
    height: 400px;
    
   
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
   .bianco{
    color: white
   }
   



   .flip-card {
  background-color: transparent;
  width: 100%;
  height: 400px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
 
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  scrollbar-width: thin;
  padding: 5px
}
 .card{
  padding: 0;
 }  
 /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: yellow; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 2, 73); 
}
}
</style>

