import React from "react";
import AppContext from "../context";


export const useCart = () => {
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => parseFloat(obj.price) + sum, 0).toFixed(2);

return { cartItems, setCartItems, totalPrice };
};