import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  // Add to cart
  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className="mx-auto md:mx-0">
      <img src={product.image} alt="" className="w-32 h-32" />
      <div className="p-3 text-center">
        <h3 className="text-slate-700 font-semibold text-md ">
          {product.name}
        </h3>
        <h3 className="text-slate-700 font-bold text-lg">${product.price}</h3>
        <button
          className="bg-slate-900 text-white rounded-full py-1 px-3 text-sm"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
