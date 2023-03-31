import React from "react";
import "./Blog.css";



function Blog() {
  return (
    <div className="blog">
        <img className="background_image" 
        src="/images/naturalbackground.png" alt="" />
        
     <h1>HI I'M <strong>KAFAYAH</strong>, AKA NATURAL MUSLIM MUMMY!</h1> 
<p>About Myself: I am a busy homeschooling mother of 5 beautiful kids with a passion for healthy living
    in accordance with Islamic teachings based on the Holy Quran and Prophetic traditions. I started natural_muslim_mummy
    over 6 years ago, initally from my desire for my family to eat healthier and has now become a business, with regular customers from through the 
    UK and Europe! Due to this gradual increase of customers I decided to create this e-commerce website 
    and also include this blog, where I will be sharing a range of ideas from cooking recipies to homeschooling
    tips!
</p>
<ul className="social_media">
<h2> Check out my Instagram Page: </h2>
    <li href="https://instagram.com/natural_muslim_mummy?igshid=YmMyMTA2M2Y=" alt=''> Natural Muslim Mummy</li>
</ul>
    </div>
  )
}



export default Blog;