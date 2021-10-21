import React from "react";
import "./Cart.css";

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleRemoveAll}) => {

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    );
    return(
        <div className="cart-items">
            <div className="cart-items-header">Вашата кошничка</div>

            <div className="remove-all">
                {cartItems.length >=1 && (
                    <button className="remove-all-button" onClick={handleRemoveAll}>Избриши се</button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty">Сеуште немате изберено ништо</div>
            )}
        
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image"
                             src={item.image}
                             alt={item.name}     
                        ></img>

                    <div className = "cart-items-name">
                        {item.name}
                    </div>

                    <div className = "cart-items-function">
                        <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                        <button className="cart-items-remove" onClick={()=> handleRemoveProduct(item)}>-</button>
                    </div>

                    <div className="cart-items-price">
                        {item.quantity} * {item.price} денари
                    </div>

                    </div>
                )
                )}

                <div className="cart-items-total-price-name">Вашата сума изнесува:
                <div className="cart-items-total-price">  {totalPrice}    денари</div>
                </div>
                   
                
            </div>
        </div>
    )
};

export default Cart