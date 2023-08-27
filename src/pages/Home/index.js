import { products } from "../../data/products";
import "./home.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubHeader from "../../components/SubHeader/SubHeader";
import Catagory from "../../components/Catagory/Catagory";
import { useEffect , useState, useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer";

const Home = () => {
    const productContext = useContext(ProductContext);
    const {setProductsGobally} = productContext;
    const [product,setProducts] = useState([]);
    const [loading, setloading] = useState(false);

    const fetchProducts = async () => {
        setloading(true);
        const response = await fetch("http://localhost:3000/products/all");
        const data = await response.json();
        setProducts(data.product);
        //setProductsGobally(data.product);
        setloading(false);
    };
    useEffect(() => {
        fetchProducts()
    },[])

    return (
    <>
    <SubHeader/>
    <Slider/>
    <Catagory/>
    <h4 className="head1">Products</h4>
        <div className="">
            <div className="wrapper">
                {products.map((item, index) => {  // use product to display from db , change link to product name to _id and also change it in route
                    return ( 
                        <Link to={`/product/${item.productname}`} className="headings"> 
                            <div key={index} className="productcard">
                                <img src={item.imamge} alt="image" />
                                <div className="carding"> 
                                    <p className="textdetail" >{item.productname}</p>
                                    <p className="pricers">Rs. {item.price}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
        <Footer/>
    </>

)}

export default Home;