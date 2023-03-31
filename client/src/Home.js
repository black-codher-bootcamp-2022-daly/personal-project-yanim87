import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/Babyfeet.png" alt="" />

        <div className="home__row">
          <Product
            id="001"
            title="Organic Pure Traditional Nigerian Black Soap 150g"
            price={7.00}
            image="images/NigerianBlackSoap.png"
            rating="🌟 BESTSELLER🌟 "
          />

          <Product
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
          <Product
            id="007"
            title="Homemade Muscle and Joint Balm 130ml"
            price={10.49}
            image="/images/HomemadeOrganicBodyBalm.png"
            rating="🌟 BESTSELLER🌟 "
          />
          <div>
          <footer>
    
    <ul class="social-media">
    
        <h2> Social Media links:</h2>
       <li> GitHub <a href= "https://github.com/" >
        <ion-icon name="logo-github"></ion-icon> </a> </li> 
        <li> Facebook <a href="https://facebook.com/kafayat.animashawun/"> 
        <ion-icon name="logo-facebook"></ion-icon> </a> </li>
        <li> Instagram <a href="https://instagram.com/natural_muslim_mummy?igshid=YmMyMTA2M2Y="> 
       <ion-icon name="logo-instagram"></ion-icon> </a> </li>
        <li> Twitter <a href="https://twitter.com/blackcodher">
        <ion-icon name="logo-twitter"></ion-icon> </a> </li>
        <li> LinkedIn <a href="https://www.linkedin.com/in/yetunde-animashawun-7887784b">
        <ion-icon name="logo-linkedin"></ion-icon> </a> </li>
    

</ul>
</footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
