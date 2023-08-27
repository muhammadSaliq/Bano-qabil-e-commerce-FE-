import "./cart.css";
import Cartcontext from '../../context/Cartcontext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cartcontext = useContext(Cartcontext);
    const {cartitems, addtocart, removefromcart} = cartcontext;
    const navigate = useNavigate();
    var total = 0;

    return (
    <div>
                        <div className="cartmain">
        {cartitems.length ? cartitems.map((item, index) => {
            return (
            <>

                <div key={index} className="cartdisplay">
                <Link to={`/product/${item.productname}`}>
                <img src={item.imamge}/> </Link>
                <Link to={`/product/${item.productname}`} className="texthead">
                <span>{item.productname}</span>
                </Link>
                {total= total+Number(item.price)}
                <span>Rs. {item.price}</span>

                </div>


                </>
            )
            
        }) : "No Item in cart"}
        </div>
        <div className="secondcartdiv">
            <h3 className="head">Total Amount</h3>
            <hr/>
            
            <div className="pricetotal">Rs. {total}</div>
            <button onClick={() => navigate('/checkout')} className="checkbbutton">Checkout</button>
        </div>
        </div>
    )
}

export default Cart;