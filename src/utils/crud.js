import axios from "axios";
import { getValue,addValue } from "./storage";

// Get all products
const getProducts = (setData) => {
    axios
        .get("https://dummyjson.com/products?limit=10")
        .then((response) => setData(response.data.products))
        .catch((error) => console.log("Error fetching products:", error));
}

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
    axios.get('https://dummyjson.com/user/me', { headers: { Authorization: getToken() } }).then((res) => res.data).then((error) => console.log(error))
}

// Get cart by user id
const getCart = () => {
    // axios.get(`'https://dummyjson.com/carts/user/${getUserId()}`).then((res) => res.data).then((error) => console.log(error))
    console.log(getUserId());
}

// Login user
const logIn = async (loginData) => {
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', loginData);
      addValue("accessToken", res.data.accessToken); 
      return true; 
    } catch (error) {
      return false; 
    }
  };
  

export { getProducts, addNewData, getCart, logIn }