import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import 'regenerator-runtime/runtime'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    const productLists = useSelector(state=>state.productLists)
    const {products, loading, error} = productLists;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts()) 
        
        return () => {
            //
        }
    }, [])
    
    return loading ? <div>Loading...</div>:
            error ? <div>{error}</div>:
            <ul className="products">
                    {
                        products.map((product, index)=>(
                            <li key={index}>
                                <div className="product">
                                    <Link to={"/product/"+ product._id}><img className="product_image"src={product.image} alt={product.alt}/>
                                    </Link>
                                    <div className="product_name">
                                        <Link to={"/product/"+ product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product_brand">{product.brand}</div>
                                    <div className="product_price">{product.price}</div> 
                                    <div className="product_rating">{product.review}</div> 
                                </div>
                            </li>

                        ))
                    }
                    
                </ul>
}

export default HomeScreen;
