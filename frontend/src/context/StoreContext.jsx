import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeCartItem = (itemId) => {
        setCartItem((prev) => {
            const newCount = (prev[itemId] || 0) - 1;
            if (newCount <= 0) {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            } else {
                return {
                    ...prev,
                    [itemId]: newCount
                };
            }
        });
    };

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeCartItem
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
