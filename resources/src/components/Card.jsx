import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';



const Card = ({userdata}) => {
    const { addItem } = useCart();

    return (
            <div className="card position-relative">
                <img src={userdata.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{userdata.title}</h5>
                    <p className="card-text">Pizza, Uncategorized</p>
                    <p className='price'>{userdata.price}  </p>
                    <Link className="btn btn-primary" to={`/shop/${userdata.id}`}>Read More</Link>
                    <button onClick={()=>{swal("Product added","","success"), addItem(userdata)}} style={{marginTop:"10px", border:"1px solid #e2e2e2", backgroundColor:"#fff", padding:"5px 8px", borderRadius:"10px" }}>add to cart</button>
                </div>
                <div className="hovericon">
        <div>
  <i className="fa-regular fa-heart" />
  <i className="fa-regular fa-eye" />
  <i className="fa-regular fa-newspaper" />
</div>

        </div>
            </div>
    
    )
}

export default Card