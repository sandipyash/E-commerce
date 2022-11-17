import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { useSelector,useDispatch } from 'react-redux';
import {clearErrors, getProductDetails} from '../../actions/productActions';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from './ReviewCard';
import Loader from '../layout/loader/Loader';
import {useAlert} from 'react-alert';
import './ProductDetails.css';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const {id} = useParams();

    const {product,loading,error} = useSelector((state) => state.productDetails);

    useEffect(() => {

      if(error) {
       alert.error(error);
       dispatch(clearErrors());
      }
     
        dispatch(getProductDetails(id));
    }, [dispatch,id,error,alert]);

    const options = {
        edit : false,
        color : "var(--color-bg)",
        activeColor : "tomato",
        size : window.innerWidth < 600 ? 20 : 25,
        value : product.rating,
        isHalf : true
    }
    
  return (

   <>
    {loading ? (<Loader/>) : (
    <>
        <div className='ProductDetails'>
            <div>
                <Carousel>
                  {
                    product.images && product.images.map((item,i) => (
                        <img className='CarouselImage' src={item.url} key={i} alt={`${i} Slide`} />
                    ))
                  }
                </Carousel>
            </div>

            <div>
                <div className='Block-1'>
                    <h2>{product.name}</h2>
                    <p>Product id: {product._id}</p>
                </div>

                <div className='Block-2'>
                <ReactStars {...options} />
                <span>({product.numOfReviews} Reviews)</span>
                </div>

                <div className='Block-3'>
                    <h1>{`₹${product.price}`}</h1>
                    <div className='Block-3-1'>
                        <div className='Block-3-1-1'>
                            <button> - </button>
                            <input type='number' value='1' />
                            <button> + </button>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                    <p>
                  Status:{" "}
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
                </div>
                <div className="Block-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
        </div>
        
        <h3 className='review-heading'>Reviews</h3>
        {product.reviews && product.reviews[0] ? (
          <div className='reviews'>
            {product.reviews && product.reviews.map(review => <ReviewCard review={review} />)}
          </div>
        ): (
          <p className='noReviews'>No Reviews Yet</p>
        )}
    </>)}
   </>
  )
}

export default ProductDetails