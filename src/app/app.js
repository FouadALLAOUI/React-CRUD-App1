import axios from "axios"

export const productsApi = axios.create({
    baseURL : "http://localhost:9000/products"
});

const getProducts=()=>{
    return productsApi.get("/products");
}

const deleteProducts=(product)=>{
    return productsApi.delete(`/products/${product.id}`);
}

const getProduct=(id)=>{
    return productsApi.get(`/products/${id}`);
}

const saveProduct=(product)=>{
    return productsApi.post(`/products`, product);
}

const checkProduct=(product)=>{
    return productsApi.patch(`/products`,{checked: !product.checked});
}

const updateProduct=(product)=>{
    return productsApi.put(`/products`,product);
}