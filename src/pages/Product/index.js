import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { products } from '../../data/products';
import "./product.css";
import Cartcontext from '../../context/Cartcontext';
import { useContext, useEffect, useState } from 'react';
//import ProductContext from '../../context/ProductContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const Product = () => {


    const navigate = useNavigate();
    const [singleproduct, setsingleproduct] = useState([]);
    const { id } = useParams();
    const token = JSON.parse(localStorage.getItem('token'));

    const { name } = useParams();  //change name to id
    const cartcontext = useContext(Cartcontext);
    const { cartitems, addtocart, removefromcart } = cartcontext;
    const [user, setUser] = useState(null);

    const productitem = products.find((item) => {    //change products to allproducts for db
        return item.productname === name;
    })

    const fetchSingleProduct = async () => {
        const response = await fetch(`http://localhost:3000/products/${name}`); //change to id
        const data = await response.json();
        setsingleproduct(data.product);
    };

    const handledelete = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        const data = await response.json();
    }

    useEffect(() => {
        fetchSingleProduct()
        const isuser = JSON.parse(localStorage.getItem('user'));
        if (isuser) {
            setUser(isuser);
        }
    }, []);

    console.log(cartitems);
    return (
        <>
            {user ? (
                <div><IconButton onClick={() => navigate(`/product/edit/${id}`)}> <EditIcon /></IconButton>
                    <IconButton> <DeleteIcon /></IconButton>
                </div>
            ) : (
                <></>
            )}
            <div className='prodctdiv'>

                <img src={productitem.imamge} className='imagediv' />
                <div className='inlinediv'>
                    <div className='detaildiv'>
                        <h2 >{name}</h2>
                        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        <hr />
                        <div className='pricediv'>
                            <h4>Rs. {productitem.price}</h4>
                            <hr />
                        </div>
                        <p>{productitem.description}</p>

                        <div>
                            <button onClick={() => addtocart(productitem)} className='addbbutton' >Add to Cart</button>
                            <button onClick={() => removefromcart(name)} className='removebbutton'>remove from Cart</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='giffdiv'>
                <img src='https://cdn.dribbble.com/users/1948198/screenshots/4377223/dribble.gif' className='gifpic'/>
            </div>
        </>
    )
}

export default Product;