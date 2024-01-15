<script>
import { store } from "../store.js"
export default{
    name: "AppHeader",
    data(){
          return{
            store
          }
        }
}
</script>
<template lang="">
    <div class="sfondo-nero">
        <div class="container ">
            <div class="row style_header">
                <div class="col-2 p-1">
                    <div>
                        <h4>NETFLIX BANGLADINO</h4>
                    </div>
                </div> 
                <div class="col-2 nome_pag">
                    <div>
                        <input type="text" class="form-control" v-model="store.search" placeholder="Ricerca..." >
                        <button class="btn" @click="$emit(`SearchSeries`, `SearchFilm`)">Ricerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<style lang ="scss" scoped>

.sfondo-nero{
 
    background-color: black;
    padding: 10px;
    .style_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h4{
        color: red;
        font-size: 30px
    }
    .btn{
        padding:10px;
        background-color: red;
        font-weight: 700;
    }
    .form-control{
        padding: 10px
    }

}
</style>