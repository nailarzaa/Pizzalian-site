import React, { useContext } from 'react';
import { SlBasketLoaded } from "react-icons/sl";
import { IoPizzaOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { GiKebabSpit } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { CiFries } from "react-icons/ci";
import { GiChickenOven } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import advertisement from '../image/advertisement.png'
import Card from '../components/Card'
import { ProductContext } from '../context/ProductContext';


const Home = () => {

  const [products]=useContext(ProductContext)


  return (
    <>
    <section className="hero">
      
    </section>
    
    
    



<section className="adver">
 <div className="container-fluid">
  <div className="row">
  {/* <img src={advertisement} alt="" /> */}
  </div>
 </div>
</section>



<section className="cards">
  <h1>The Best Pizza Menu In Town</h1>
  <p>There's always something interesting down here</p>

  <div className="container my-5">
    <div className="row">
    {
    products.map((item)=>{
      
     return (
      <div className='col-12 col-md-3 col-sm-12 col-xs-12 g-4'  key={item.id}>
     <Card userdata={item}/>
     </div>
     )
     
    })
  }
    </div>
  </div>


</section>
    
    </>

   
  );
};

export default Home;
