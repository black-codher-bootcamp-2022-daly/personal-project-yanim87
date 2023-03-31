import React from "react";
import './Product.css';

function Product ({id, title, image, price, rating}) {
    return (<div className="product">
        <div className="product__info">
            <p>{title} </p>
            <p className="product__price">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>{id}🌟 BESTSELLER🌟 </p>
                ))}

               
            </div>
        </div>
       
        <img 
        src={image}
        alt=""
        />
        <button onClick>Add to Basket</button>
    </div>)

}
const addProductToBasket = () => {
    return(console.log(addProductToBasket))
};
function addProductToBasket(product) {
    console.log(product);
    const newBasket = basket;
    newBasket.push(product);
 setBasket(newBasket);

};
const removeProductFromBasket = (id) => {
    const newProducts = [];
    basket.forEach ((products) => {
if (products.id === id ) {
    newProducts.push(products);
}
return products
    });
    
}
export default Product;