import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

const Header = ({ handleLogout }) => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <header className="shadow-lg h-max py-3 md:h-16 ">
      <div className="wrapper flex flex-col md:flex-row gap-2 justify-between items-center h-full">
        <h1 className="text-2xl text-slate-900 uppercase font-bold mx-auto md:mx-0">
          Shopping Cart
        </h1>
        <nav className="mx-auto  md:mx-0 space-x-9">
          <button
            onClick={showCart}
            className="relative bg-transparent text-slate-600 uppercase  font-semibold text-lg"
          >
            Cart
            <span className="absolute -right-2 bg-opacity-60 top-0 w-5 h-4 text-center flex items-center justify-center bg-pink-600 text-white text-[12px] font-bold rounded-full border border-slate-900">
              {totalItems}
            </span>
          </button>
          <button
            className="bg-red-600 text-white uppercase rounded-sm px-3 py-1 hover:bg-red-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
