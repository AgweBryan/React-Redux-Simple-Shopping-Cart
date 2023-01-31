import React from "react";

const CartButton = ({ onClick, operator, bgColor }) => {
  const classes = `w-7 border-slate-900 h-7 rounded-full border bg-blue-500 flex justify-center items-center text-white text-md font-semibold ${bgColor}`;
  return (
    <button onClick={onClick} className={classes}>
      {operator}
    </button>
  );
};

export default CartButton;
