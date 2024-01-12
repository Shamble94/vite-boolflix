<script>
import FlagIcon from 'vue-flag-icon' ;
import { store } from "../store.js"
export default{
    name: "SeriesList",
    components:{
      FlagIcon
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getFlag(series){
        let flag = `fi fi-${series}`
        if(flag === "fi fi-en"){
          flag = `fi fi-gb`
        }
        if(flag !== "fi fi-gb"  && flag !=="fi fi-es"  && flag !=="fi fi-de" && flag !=="fi fi-it"){
          flag = "fi fi-it"
        }
        return flag
      },
      getPoster(series){
          let poster = `https://image.tmdb.org/t/p/w342${series.poster_path}`
          console.log(series)
          return poster
      }
    },
    created(){
      this.getFlag();
      this.getPoster()
    }
  
  }

</script>
<template lang="">
  <div>
    <body>
      <!-- CONTAINER -->
      <div class="container">
        <!--  CONTENITORE DEI FILM -->
        <div class="container-series">
            <div class="row ">

                <h4 v-if="store.series.length > 0"> FAI LA TUA PRIMA RICERCA </h4>
        
                  <!-- LISTA CONTENENTE I DATI DEI FILM -->
                  
                    <div class="card col-3" v-for="serie, index in store.series" :key="index" > 

                            <div>
                                <img :src="getPoster(series)" alt="">
                            </div>
                 
                        <!-- TITOLO  -->
                        TITOLO: {{ serie.name }} 
                        <div>
                        <!-- TITOLO ORIGINALE  -->
                        TITOLO ORIGINALE: {{ serie.original_name }}
                        </div>
                        <div>
                        <!--div class="cardNGUA ORIGINALE --> 
                        LINGUA ORIGINALE: 
                        <span > <i :class="getFlag(serie.original_language)"></i></span>
                        </div>
                        <div>
                        <!-- MIDIA VOTO -->
                        MEDIA VOTO: {{ (serie.vote_average).toFixed(1)}}
                        
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
.container-series{
    display: flex;
    margin-top: 20px;
    h4{
      margin: 10px
    }
    .card{
        height: 500px
    }
   
}
</style>

