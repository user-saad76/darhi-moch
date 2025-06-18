
import { useParams } from 'react-router'
import { product } from '../data'
function DetailPage(){
     const {slug}=useParams()
     const items = product.find((item)=>item.slug==slug)
     console.log(items)
    return(
      <div className="container">
        <p>Category:{items.category}</p>
         <img style = {{width:'200px'}}src={items.image} alt="" />
         <h1>{items.title}</h1>
         <p>{items.description}</p>
         <h5>Price:{items.price}</h5>
        <button to="#" className="btn btn-primary">Go somewhere</button>
      </div>
     
    )
}
export default DetailPage