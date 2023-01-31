import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { authActions } from "./store/slices/authSlice";
import { products } from "./data";
import Auth from "./Components/Auth";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { useEffect } from "react";
import Notification from "./Components/Notification";
import { fetchCartData, sendCartData } from "./store/actions/cartActions";

let firstRender = true;
const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    } else {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // Login
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  // Logout
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      {!isLoggedIn && <Auth handleSubmit={handleSubmit} />}
      {isLoggedIn && (
        <div>
          {notification.open && (
            <Notification
              type={notification.type}
              message={notification.message}
            />
          )}
          <Header handleLogout={handleLogout} />
          <br />
          <br />
          <br />
          <div className="wrapper flex flex-col md:flex-row md:justify-between ">
            <Products products={products} />
            {showCart && <Cart />}
          </div>
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default App;
