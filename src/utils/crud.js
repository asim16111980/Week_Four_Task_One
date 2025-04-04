import axios from "axios";
import { getValue } from "./Storage";

// Add new data in dummy json api
const addNewData = (endPoint, data) => {
    axios.post(`https://dummyjson.com/${endPoint}/add`, data).then((res) => console.log(res))
}

// Get user token from local storage
const getToken = () => {
    return getValue("accessToken");
}

// Get user id
const getUserId = () => {
  return  axios.get('https://dummyjson.com/user/me', { headers: { Authorization: getToken() } }).then((res) => res.data).then((error) => console.log(error))
}

// Get cart by user id
const getCart = () => {
    // axios.get(`'https://dummyjson.com/carts/user/${getUserId()}`).then((res) => res.data).then((error) => console.log(error))
    console.log(getUserId());
}

export { addNewData, getCart }