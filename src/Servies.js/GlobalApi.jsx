import axios from "axios";
const key="72a3a5ef7ca246339d5bb5e492bbee3c"
const axioCreate= axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "18d8dc115d954615a6fe8522598e8a97",
    // },
  });
  
const getPopularGame=axioCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axioCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
} 