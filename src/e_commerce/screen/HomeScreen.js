import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import 'regenerator-runtime/runtime'

function HomeScreen(props) {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios ("/api/products")
            setProduct(data)
        }
        fetchData()
        return () => {
            //
        }
    }, [])
    
    return (
        <div>
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
        </div>
    )
}

export default HomeScreen;
