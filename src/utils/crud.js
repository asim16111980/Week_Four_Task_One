import axios from "axios";
import { getValue, setValue } from "./storage.js";

// Get all products
const getProducts = (setData) => {
  axios
    .get("https://dummyjson.com/products?limit=10")
    .then((response) => setData(response.data.products))
    .catch((error) => console.log("Error fetching products:", error));
}

// Get product by id
const getProduct = async (id) => {
  try {
    return axios.get(`https://dummyjson.com/products/${id}`).then((res => res.data));
  } catch (error) {
    return null;
  }
}

// Signup new user
const signUp = async (data) => {
  try {
    axios.post(`https://dummyjson.com/users/add`, data);
    return true;
  } catch (error) {
    return false;
  }
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
    const resStatus = await axios.post('https://dummyjson.com/auth/login', loginData);
    setValue("accessToken", resStatus.data.accessToken);
    return true;
  } catch (error) {
    return false;
  }
};


export { getProducts, getProduct, signUp, getCart, logIn }