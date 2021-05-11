import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/productConstant"

const listProducts = () => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/product");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
}
catch (error) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
} 

}
export {listProducts}
    