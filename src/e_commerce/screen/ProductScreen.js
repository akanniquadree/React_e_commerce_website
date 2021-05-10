import React from 'react'
import data from '../data/data';
import {Link} from "react-router-dom"

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => Number (x._id )=== Number (props.match.params.id));
    return (
        <div>
            <div className="back_to_result"><Link to="/">Back To Result</Link></div>
            <div className="details">
                <div className="details_image">
                    <img src={product.image}></img>
                </div>
                <div className="details_info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.review}
                        </li>
                        <li>
                           Price: <b>{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details_action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
    
}

export default ProductScreen;