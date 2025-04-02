import axios from "axios";

// Update product by product id
const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.patch(`https://dummyjson.com/products/${productId}`, updatedData);

        console.log("Product updated successfully:", response.data);
    } catch (error) {
        console.error("Error updating product:", error);
    }
};

export { updateProduct }