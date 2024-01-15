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
                    <div class="container-list">
                        <h4>NETFLIX BANGLADINO</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li>Film</li>
                            <li>Serie Tv</li>
                            <li>Piu Popolari</li>
                            <li>Novità</li>
                        </ul>
                    </div>
                </div> 
                <div class="col-2 nome_pag">
                    <div>
                        <input type="text" class="form-control" v-model="store.search" placeholder="Ricerca..." >
                        <button class="btn" @click="$emit(`SearchSeries`)">Ricerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<style lang ="scss" scoped>

.sfondo-nero{
 
    background-color: rgba(255,255,255,0.5);
    padding: 0 10px;
    width: 100%;
    .style_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
     
    }
    h4{
        color: red;
        font-size: 20px
    }
    .btn{
        padding:10px;
        background-color: red;
        font-weight: 700;
    }
    .form-control{
        padding: 10px
    }
    li{
        list-style: none;
        color:white
    };
    ul{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        gap: 11px
    }
    .container-list{
        display: flex
    }
    a{
        text-decoration: none;
        color: '\f1a2'
    }
    li:hover{
        color: blue;
        cursor: pointer;
    }
    }


</style>