import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartLength = cart.cartItems.length > 0 ? false : true;
  return (
    <div className="cart mx-auto md:mx-0 p-4 border w-full md:max-w-sm">
      <h3 className="text-xl text-slate-600 font-semibold capitalize">
        Cart Items
      </h3>
      {cartLength && (
        <p className="text-slate-500 mt-3 font-semibold">
          No items in cart yet.
        </p>
      )}
      <CartItem />
      <div className="text-right">
        <h3 className="text-slate-600 text-lg font-semibold">
          Total price: ${cart.totalAmount}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
