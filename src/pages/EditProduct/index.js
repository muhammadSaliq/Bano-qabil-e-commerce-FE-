import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import "./Editproduct.css"
import { useNavigate } from 'react-router';

const EdittProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");


    const fetchSingleProduct = async() => {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const data = await response.json();
        setsingleproduct(data.product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setsingleproduct(()=> {
            return {
                ...singleproduct, [name]: value
            }
        })

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
        const productData = { ...singleproduct};
        const response = await fetch(`http://localhost:3000/products/edit/${id}`, {
            method: "PUT", 
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
    },[]);

    useEffect (()=> {
        fetchSingleProduct()

    },[]);

    return (
    <div className='rootcontainer'>
        <h2>edit your Product</h2>
        <TextField fullWidth value={singleproduct.productName} onChange={handlecchange} name="productName" variant="outlined" />
        <TextField fullWidth value={singleproduct.price} onChange={handlecchange} name="price" variant="outlined" />
        <TextField fullWidth multiline maxRows={4}  value={singleproduct.descryption} onChange={handlecchange} name="descryption" variant="outlined" />
        <TextField fullWidth /*value={image}*/ onChange={handleUpload} type='file' name="image" variant="outlined" />
        <Button fullWidth onClick={handlesubmit} variant="contained">edit product</Button>

        
        </div>
    )
}

export default EdittProduct;