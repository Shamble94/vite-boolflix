<script>
import { store } from "../store.js"
export default {
    name: 'Card',
    props: {
        Film: Object,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-4">
        <div class="card">
            <ul>
                <li v-for="Films, index in Film" :key="index">
                    <h5>{{ Films.title }}</h5>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    text-align: center;
    background-color: grey;
    height: 500px;
    h5 {
        color: white
    }
}
</style>