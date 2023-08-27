import { createContext, useState } from "react";

const ProductContext = createContext({});

export const Productcontainer = ({children}) => {
    const[allProducts , setallProducts] = useState([]);


    const setProductsGobally = (data) => {
        setallProducts(data);
    }


    return <ProductContext.Provider value={{
        allProducts,
        setProductsGobally,

    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;