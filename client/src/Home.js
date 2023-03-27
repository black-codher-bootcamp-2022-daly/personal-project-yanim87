import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
   <div className="home__container">
       <img 
       className="home__image"
       src="/images/Babyfeet.png"
       alt=""
       />

  
   <div className="home__row">
       <Product
       id="001"
       title="Organic Pure Traditional Nigerian Black Soap 150g"
       price={7.00} 
       image="images/NigerianBlackSoap.png"
       rating="🌟 BESTSELLER🌟 "
       />
       
       < Product 
       id="002"
       title="Organic Nigerian Unrefined Raw Shea Butter 200g"
       price={7.00}
       image="/images/OrganicSheaButter.png"
       rating="🌟 BESTSELLER🌟 "
       />
       
   </div>

   <div className="home__row"> 
<Product 
id="003"
title="Homemade Elderberry Syrup 200ml"
price={18.00}
image="/images/HomemadeElderberrySyrup.png"
rating="🌟 BESTSELLER🌟 "
/>

<Product 
id="004"
title="Organic Coconut Sugar 500g"
price={7.50}
image="/images/OrganicSheaButter.png"
rating="🌟 BESTSELLER🌟 "
/>
<Product 
id="005"
title="Organic Black Seeds 60g"
price={5.99}
image="/images/OrganicBlackSeed.png"
rating="🌟 BESTSELLER🌟 "
/>

   </div>

   <div className="home__row">
     <Product 
     id="006"
     title="Organic Pure Pink Himalayan Salt 700g"
     price={4.99}
     image="/images/PinkHimalayanSalt.png"
     rating="🌟 BESTSELLER🌟 "
     />
   </div>
   </div>
    </div>
  )
}

export default Home

