import React, { useState } from 'react';
 import fakeData from '../../fakeData';
import Product from '../Product/Product';
 import './Shop.css';

const Shop = () => {
   
     const first10 = fakeData.slice(0,10);
     const [products, setProducts]= useState(first10);
    
    return (
        <div className='shop-container'>
            <div className="product-container">
            <ul>
                {
                    products.map(products=> <Product product={products}></Product>) 
                }
              </ul>
            </div>

            <div className="chart-container">
                <h1>this is Chart</h1>
            </div>
           
             
           
        </div>
    );
};

export default Shop;