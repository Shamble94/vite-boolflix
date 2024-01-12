<script>
export default{
    name: "AppHeader"
}
</script>
<template lang="">
    <div class="sfondo-nero">
        <div class="container ">
            <div class="row style_header">
                <div class="col-2 nome_pag">
                    <div>
                        <h4>BOOLZFLIX</h4>
                    </div>
                </div> 
                <div class="col-2 nome_pag">
                    <div>
                        <input type="text" class="form-control">
                        <button class="btn">Ricerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<style lang ="scss" scoped>
.nome_pag{
    padding: 10px;
    
}
.sfondo-nero{
   
    background-color: black;
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