import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";
import { fetchGetBasketItems } from "../store/cartReducer.js";
import useCart from "../hooks/useCart";
function Checkout() {
  const { cartItems, getCart } = useCart();
  useCart();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={"../images/city-banner-day.png"}
          alt=""
        />
        {cartItems.length === 0 || cartItems === undefined ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h3>Hello loyal customer! :D </h3>
            <h2 className="checkout__name">Your Shopping Basket</h2>
            {cartItems.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={`../images/${item.imageUrl}`}
                  quantity={item.quantity}
                  item={item}
                />
              );
            })}
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
