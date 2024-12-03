import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';

const ProductDetails = () => {
    const { urlid } = useParams(); 
    const [products] = useContext(ProductContext);
    
    const findProduct = products.find(p => p.id === urlid);
    console.log(findProduct)
    console.log(urlid)
    console.log(products)

    return (
       <div>
        {findProduct==undefined?<div className='d-flex align-items-center justify-content-center'><img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" style={{width:'70%', height:'55vh'}}/></div>:<div className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img 
                      src={findProduct.img} 
                      className="d-block mx-lg-auto img-fluid" 
                      alt={findProduct.title} 
                      width={700} 
                      height={500} 
                      loading="lazy" 
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{findProduct.title}</h1>
                    <p style={{fontSize:"30px", color:"red", fontWeight:"600"}} className="lead ">${findProduct.price}</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita optio eos explicabo, labore earum saepe iure blanditiis iste exercitationem excepturi nobis quasi quia nostrum! Provident magni animi, expedita quidem sapiente odit perspiciatis sequi, dicta nam obcaecati nesciunt quisquam nostrum? Harum eaque totam repellat, iusto veritatis corporis quod voluptas at facilis.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Next</button>
                        <Link to="/shop" type="button" className="btn btn-outline-danger btn-lg px-4">Back</Link>
                    </div>
                </div>
            </div>
        </div>}
       </div>
    );
};

export default ProductDetails;
