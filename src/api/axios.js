import axios  from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key: "3aa50a3d19869d79d4087e238f9e5418",
        language: "ko-KR"
    }
})

export default instance;