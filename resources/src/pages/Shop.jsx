import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Card from '../components/Card'

const Shop = () => {

  const [products]=useContext(ProductContext);
  const [filtered, setFiltered]= useState([]);

  const selectCategory =(cat)=>{
    const filteredProduct = products.filter(p=>p.categories===cat);
    console.log(filteredProduct);
    setFiltered(filteredProduct)
    
    
  }
  return (
    <>
   


 <div className="container my-5">
  <div className="row">
    <div className='col-12 col-md-3 col-sm-12 col-xs-12'>
    <section className="category-section">
  <h2>Product categories</h2>
  <ul>
    <li onClick={()=>{selectCategory("Cheesy")}}> Cheesy</li >
    <li  onClick={()=>{selectCategory("withOlives")}} > Oliver</li >
    <li  onClick={()=>{selectCategory("Chicken")}} > Chicken</li >
    
  </ul>
</section>
    </div>

<div className='col-12 col-md-9 col-sm-12 col-xs-12'>
<section className="cards">
  <div className="container">
    <div className="row">
    {filtered.length===0?
    products.map((item)=>{
     return (
      <div className='col-12 col-md-4 col-sm-6 col-xs-12' key={item.id} >
      <Card userdata={item}/>
      </div>
     )
    }):filtered.map((item)=>{
      return (
       <div className='col-12 col-md-4 col-sm-6 col-xs-12' key={item.id} >
       <Card userdata={item}/>
       </div>
      )
     })
  }
    </div>
  </div>
</section>
</div>

  </div>
 </div>



    </>
  )
}

export default Shop