import { cartActions } from "../slices/cartSlice";
import { notificationActions } from "../slices/notificationSlice";

// fetch request and update cart

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = () => {
      const data = JSON.parse(localStorage.getItem("cart"));

      return data;
    };

    try {
      const resetCart = {
        cartItems: [],
        totalAmount: 0,
        totalItems: 0,
        showCart: false,
        changed: false,
      };
      const data = fetchData() === null ? resetCart : fetchData();
      dispatch(cartActions.replaceCartData(data));
    } catch (error) {
      console.log(error);
      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = () => {
      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch(
        notificationActions.showNotification({
          open: false,
          message: "Sent request to database successfully",
          type: "success",
        })
      );
    };
    try {
      // await sendRequest()
      sendRequest();
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
