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
            <h4 v-if="store.series.length > 0"> FAI LA TUA PRIMA RICERCA </h4>
          <ul>
            <!-- LISTA CONTENENTE I DATI DEI FILM -->
            <li v-for="serie, index in store.series" :key="index" > 
              <!-- TITOLO  -->
              TITOLO: {{ serie.name }} 
              <div>
              <!-- TITOLO ORIGINALE  -->
              TITOLO ORIGINALE: {{ serie.original_name }}
              </div>
              <div>
              <!-- LINGUA ORIGINALE --> 
              LINGUA ORIGINALE: 
              <span > <i :class="getFlag(serie.original_language)"></i></span>
              </div>
              <div>
              <!-- MIDIA VOTO -->
              MEDIA VOTO: {{ (serie.vote_average).toFixed(1)}}
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
      margin-bottom: 20px;
      color: black
    }
    h4{
      margin: 10px
    }
}
</style>

