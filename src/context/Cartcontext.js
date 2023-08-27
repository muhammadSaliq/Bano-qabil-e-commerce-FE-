import { createContext, useState } from "react";

const Cartcontext = createContext({});

export const Cartcontainer = ({children}) => {
    const[cartitems , setcartitem] = useState([]);

    const addtocart = (newitem) => {

        const existproduct = cartitems.find(
            (product) => product.productname === newitem.productname
            );
        if (existproduct) {
            return;
        }
        const items = [...cartitems, newitem];
        setcartitem(items);
console.log(cartitems);
    }
    const removefromcart = (name) => {
        const filtereditem = cartitems.filter((item) => item.productname !== name);
        setcartitem(filtereditem);
    }

    return <Cartcontext.Provider value={{
        cartitems,
        addtocart,
        removefromcart,
    }}>
        {children}
    </Cartcontext.Provider>
}

export default Cartcontext;