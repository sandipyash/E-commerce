import React,{useEffect} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
 import 'react-simple-typewriter/dist/index'
import {BsCart3} from 'react-icons/bs';
import ProductCard from './ProductCard';
import { clearErrors, getProduct } from '../../actions/productActions';
import {useSelector,useDispatch} from 'react-redux';
import Loader from '../layout/loader/Loader';
import {useAlert} from 'react-alert';
import './Home.css';


function Home() {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {loading,error,products,productsCount}=useSelector(
        (state) => state.products);

       

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [alert, dispatch, error])


    const {text} = useTypewriter({
        words: [ " Electronics."," Pharmacy."," Books."," Furniture.","Watches and Camera"],
        loop: 0,
        typeSpeed: 250,
        deleteSpeed: 250,
        delaySpeed: 1000
        })
    
  return (
    <>
        {loading ? (<Loader/>) :(
            <>

        <div className='poster'>
            <h3 data-text="Welcome to our E-Commerce Website">Welcome to our E-Commerce Website</h3>
            <h1 data-text="You Can Find Amazing Products Below">You Can Find Amazing Products Below</h1>

            <div className='category'>
            <h2>Find Your Category :
            <span style={{color:'red'}}>
                {text}
            </span>
            </h2>
             </div>

            <a href='#container'>
                <button>
                    Shop Now {<BsCart3/>}
                </button>
            </a>
        </div>


        <h2 className="home-heading">Featured Products</h2>

        <div className="container" id="container">
            
    
        {products && products.map((product)=> <ProductCard  product={product} key={product}/>)}
             
          </div>
    </>
        ) }
    </>
  )
}

export default Home