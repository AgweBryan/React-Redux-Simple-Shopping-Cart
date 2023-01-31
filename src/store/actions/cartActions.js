import { cartActions } from "../slices/cartSlice";
import { notificationActions } from "../slices/notificationSlice";

// fetch request and update cart

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://redux-8975f-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await res.json();
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
      const data = (await fetchData()) ?? resetCart;
      dispatch(cartActions.replaceCartData(data));
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-8975f-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      dispatch(
        notificationActions.showNotification({
          open: true,
          message: "Sent request to database successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
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
