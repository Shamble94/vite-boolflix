import { reactive } from "vue";
export const store = reactive ({
    app_title: "Boolzflix",
    endpoint_film: "https://api.themoviedb.org/3/search/movie?api_key=1a37b626e59c4b0287dcf0745a7204bd&language=it",
    endpoint_series: "https://api.themoviedb.org/3/search/tv?api_key=1a37b626e59c4b0287dcf0745a7204bd&language=it",
    film: [],
    series: [],
    search: ""
})