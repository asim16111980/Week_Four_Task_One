import axios from "axios";

// Add new data in dummy json api
const addNewData = (endPoint,data) => {
    axios.post(`https://dummyjson.com/${endPoint}/add`,data).then((res)=>console.log(res))
}


export{addNewData}