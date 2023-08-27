import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import "./Addproducct.css"
import { useNavigate } from 'react-router';

const AddProduct = () => {
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");



    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        
        if (name == "productName") {
            setProductName(value);
        }
        if (name == "price") {
            setPrice(value);
        }
        if (name == "descryption") {
            setDescryption(value);
        }
        if (name == "image") {
            setImage(value);
        }

    };
    
    const handleUpload = async(ev) => {
        const file = ev.target.files(0)
        const formData = new FormData();
        formData.append("image",file);
        const response = await fetch("http://localhost:3000/upload", {
        method: "POST",    
        body: formData,
        });

    }

    const handlesubmit = async () => {
        const productData = { productName , price : +price,descryption,image};
        const response = await fetch("http://localhost:3000/products/add", {
            method: "POST", 
            headers: {
                "Content-type":"application/json",
                Authorization: "Bearer token"
            },
            body: JSON.stringify(productData),
        });

    }
    useEffect(()=> {
      //  const user = JSON.parse(localStorage.getItem('user'));   //change user to true to access addproduct page
      const user = true;
      if(!user) {
            navigate('/login')
        }
    })

    return (
    <div className='rootcontainer'>
        <h2>add your Product</h2>
        <TextField fullWidth value={productName} onChange={handlecchange} name="productName" label="product" variant="outlined" />
        <TextField fullWidth value={price} onChange={handlecchange} name="price" label="price" variant="outlined" />
        <TextField fullWidth multiline maxRows={4}  value={descryption} onChange={handlecchange} name="descryption" label="descryption" variant="outlined" />
        <TextField fullWidth /*value={image}*/ onChange={handleUpload} type='file' name="image" variant="outlined" />
        <Button fullWidth onClick={handlesubmit} variant="contained">Add product</Button>

        
        </div>
    )
}

export default AddProduct;