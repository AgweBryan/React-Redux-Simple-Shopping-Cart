import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import CartButton from "./CartButton";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  // Add to cart
  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  // Remove from cart
  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <ul className="divide-y">
      {cartItems.map((item) => {
        return (
          <li key={item.id} className="py-2">
            <div className="flex  justify-between items-center ">
              <div className="w-16 h-16">
                <img src={item.image} alt="" className="object-cover" />
              </div>
              <p className="font-semibold  text-slate-600">{item.name}</p>
              <p className="font-semibold text-lg text-slate-600">
                ${item.total}
              </p>
              <div className="flex flex-nowrap space-x-3 items-center">
                <CartButton
                  onClick={() => addToCart(item)}
                  operator={"+"}
                  bgColor={"bg-blue-500"}
                />
                <span>{item.qty}</span>
                <CartButton
                  onClick={() => removeFromCart(item.id)}
                  operator={"-"}
                  bgColor={"bg-red-500"}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItem;
