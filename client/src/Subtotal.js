import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";


function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat 
      renderText={(value) => (
          <>
          <p>
          Subtotal ({/*basket.length*/} 0 items):
          <strong>{/*'${value}'*/}0</strong>
          </p>
          <small className="subtotal__present">
         <input type="checkbox" /> This order contains a present
          </small>
          </>
 )}
 decimalScale={2}
      value={0/*getBasketTotal(basket)*/}
 displayType={"text"}
 thousandSeparator={true}
 prefix={"£"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
