import axios from "axios";


// Add object to item in local storage
const addToLocalStorage = (item, object) => {
    let storedItem = JSON.parse(localStorage.getItem(item)) || [];
    storedItem.push(object);
    localStorage.setItem(item, JSON.stringify(storedItem));
    console.log("Product added to wishlist:", product);
}



// Update product by product id
// const updateProduct = async (productId, updatedData) => {
//     try {
//         const response = await axios.patch(`https://dummyjson.com/products/${productId}`, updatedData);

//         console.log("Product updated successfully:", response.data);
//     } catch (error) {
//         console.error("Error updating product:", error);
//     }
// };

export { addToLocalStorage }