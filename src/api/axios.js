import axios from "axios";

const instance = axios.create({
    baseURL  :"https://api.themoviedb.org/3",
    params:{
        api_key : "7560ea7bed0be23797b84a47b0ff0315",
        language : "ko-KR",
    },
});

export default instance;