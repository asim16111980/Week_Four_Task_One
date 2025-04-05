

// Get value from local storage
const getValue = (item) => {
    return localStorage.getItem(item)
}

// Get item from local storage
const getItem = (item) => {
    return JSON.parse(localStorage.getItem(item)) || [];
}

// Store value in local storage 
const setValue = (item, value) => {
    localStorage.setItem(item, value)
}

// store new data in item in local storage
const setNewData = (item, data) => {
    const oldData = getItem(item);
    const newData = [...oldData, { ...data }];
    localStorage.setItem(item, JSON.stringify(newData));
}

  // Update data in item in local storage
const updateItem = (item, newData) => {
    localStorage.removeItem(item);
    const newDataString = JSON.stringify(newData);
    localStorage.setItem(item, newDataString);
  }

// Add object to item in local storage
const addToLocalStorage = (item, object) => {
    // let storedItem = JSON.parse(localStorage.getItem(item)) || [];
    // storedItem.push(object);
    // localStorage.setItem(item, JSON.stringify(storedItem));
    // console.log("Product added to wishlist:", product);
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

export { getValue, getItem, setValue, addToLocalStorage, setNewData,updateItem }