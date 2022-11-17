import React,{useEffect,useState} from 'react';
import './Products.css';
import { useSelector,useDispatch } from 'react-redux';
import { clearErrors } from '../../actions/productActions';
import { getProduct } from '../../actions/productActions';
import { useParams } from 'react-router';
import Pagination from 'react-js-pagination';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Loader from '../layout/loader/Loader';
import ProductCard from '../Home/ProductCard';


const Products = () => {

    const dispatch = useDispatch();

    const [currentPage,setCurrentPage] = useState(1);

    const [price, setPrice] = useState([0,110000]);

    const {products,loading,error,productsCount,resultPerPage}= useSelector((state) => state.products);

    const keyword = useParams().keyword;

    const setCurrentPageNo = (e) => {
       setCurrentPage(e)
    }

    const priceHandler =(event,newPrice) => {
        setPrice(newPrice);
    }

    useEffect(() => {
      dispatch(getProduct(keyword,currentPage,price));
    }, [dispatch,keyword,currentPage,price])

   
    
  return (
    <>
        {loading ? (<Loader/>) :(
        <>
            <h2 className='products-heading'>Products</h2>
            <div className='products'>
                {products && products.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>

              <div className='filter-box'>
                 <Typography>Price</Typography>
                 <Slider 
                 value={price} 
                 onChange={priceHandler} 
                 valueLabelDisplay='auto'
                 aria-label='range-slider'
                 min={0} 
                 max={110000} />
              </div>


               
                <div className='paginationBox'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText='Next'
                    prevPageText='Prev'
                    firstPageText='1st'
                    lastPageText='Last'
                    itemClass='page-item'
                    linkClass='page-link'
                    activeClass='pageItemActive'
                    activeLinkClass='pageLinkActive'
                />
            </div>
                
           
        </>
        )}
    </>
  )
}

export default Products