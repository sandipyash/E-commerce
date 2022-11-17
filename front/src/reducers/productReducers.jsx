import { ALL_PRODUCT_REQUEST } from "../constants/productConstants"
import { ALL_PRODUCT_SUCCESS } from "../constants/productConstants"
import { ALL_PRODUCT_FAIL } from "../constants/productConstants"
import { CLEAR_ERRORS } from "../constants/productConstants"
import { PRODUCT_DETAILS_REQUEST } from "../constants/productConstants";
import { PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";
import { PRODUCT_DETAILS_FAIL } from "../constants/productConstants";
 
 export const productReducer = (state = {products : []},action) => {

    switch(action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading : true,
                products : []
            }
            case ALL_PRODUCT_SUCCESS:
            return {
                loading : false,
                products : action.payload.products,
                productsCount : action.payload.productsCount,
                resultPerPage : action.payload.resultPerPage,
            }
            case ALL_PRODUCT_FAIL :
            return {
                loading : false,
                error : action.payload
               
            }
            case CLEAR_ERRORS :
                return {
                    ...state,
                    error: null
                }
            
            default:
                return state;
    }

 };


 export const productDetailsReducer = (state = {product : {}},action) => {

    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading : true,
                ...state,
            }
            case PRODUCT_DETAILS_SUCCESS :
            return {
                loading : false,
                product : action.payload,
            }
            case  PRODUCT_DETAILS_FAIL :
            return {
                loading : false,
                error : action.payload
               
            }
            case CLEAR_ERRORS :
                return {
                    ...state,
                    error: null
                }
            
            default:
                return state;
    }

 };

