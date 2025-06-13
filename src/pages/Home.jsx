import React from 'react'
import ProductCard from '../components/ProductCard'
import { product } from '../data'

function Home() {
    return(
        <>
       
          <div className="container ">
          <div className="row">
           {
        product.map(product=>
          
          <ProductCard  product={product}/> 
      
    
          )
        }
      </div>
       </div>
        </>
    )
}

export default Home