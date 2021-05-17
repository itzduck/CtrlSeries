import { useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
    console.log(state,action)
  if (action.type === "REQUEST") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  return state;
};

const useGet2 = (url) => {
    console.log(url)
//   const [data, dispatch] = useReducer(reducer, {
//     loading: true,
//     data: {}
//   });
//   console.log("antes do useEffect")

//   useEffect(() => {
//     dispatch({ type: "REQUEST" })
//     axios.get(url).then((res) => {
//         console.log(res)
//       dispatch({ type: "SUCCESS", data: res.data });
//     });
//   }, []);
    axios.get(url)
    .then((res)=>{
        console.log('-----------------------------------------------')
        // console.log(res.data.data)
        return res.data
    })
  return data;
};
// const useGet = axios.create({
//   baseURL: "https://kitsu.io/api/edge/anime?page[limit]=18&page[offset]=0",
// });
const baseURL = 'https://api.themoviedb.org/3'
const api_key = 'api_key=41a712c8ffaffb8c3872a1ea3851194c';
const page= '&page=1'
const options = {
  method: 'GET',
  url: `${baseURL}/tv/airing_today?${api_key}${page}`,
};

const useGet = axios.request(options).then(function (response) {
  console.log(response)
	return response.data;
}).catch(function (error) {
	console.error(error);
});
export default useGet;
