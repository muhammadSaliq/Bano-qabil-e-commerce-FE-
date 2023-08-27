import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import "./checkout.css"
import Cartcontext from '../../context/Cartcontext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Checkout = () => {
    const navigate = useNavigate();
    const [userName, setuserName] = useState("");
    const [address, setAdress ] = useState("");
    const cartcontext = useContext(Cartcontext);
    const {cartitems, addtocart, removefromcart} = cartcontext;
    //var total=0;
    const [total, setTotal] = useState(0);
    

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        
        if (name == "userName") {
            setuserName(value);
        }
        if (name == "address") {
            setAdress(value);
        }

    };


    return (
        <>
    <div className='rootcontainer'>
        <h2>CheckOut</h2>
        <TextField fullWidth value={userName} onChange={handlecchange} name="userName" label="User Name" variant="outlined" />
        <TextField fullWidth multiline maxRows={4} value={address} onChange={handlecchange} name="address" label="address" variant="outlined" />

        <FormGroup>
        <h5>select payment method</h5>
      <FormControlLabel required control={<Checkbox />} label="Cash on delievery" />
      <FormControlLabel required control={<Checkbox />} label="Credit card" />
      <FormControlLabel required control={<Checkbox />} label="E-wallet" />
      <button className='submit'>Order</button>

    </FormGroup>
       
        </div>

        
        </>
    )
}

export default Checkout;