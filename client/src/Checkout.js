import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout(){
    return <div className='checkout'>
        <img className="checkouttoinstagram_link"
        src="https://instagram.com/natural_muslim_mummy?igshid=YmMyMTA2M2Y="
        alt=""/>
        <div className ="checkout_left">
            <img className="checkout__image"
            src="/images/naturalmuslimmummy2ndicon.jpeg"
            
            alt=""
            />
        
        <h1>CHECKOUT PAGE</h1>
        <div>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>
            {/*BasketItem*/}
             {/*BasketItem*/}
             {/*BasketItem*/}
             {/*BasketItem*/}
        </div>
        </div>
        <div className="checkout_right">
           <Subtotal />
            <h2>SUBTOTAL</h2>
        </div>
    </div>
}


export default Checkout;