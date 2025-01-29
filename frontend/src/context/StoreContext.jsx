import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const url = "https://foodmart-app.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers:{token}})
        }
    };

    const removeCartItem = async (itemId) => {
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
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers:{token}})
        }
    };

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                TotalAmount += itemInfo.price * cartItem[item];

            }
        }
        return TotalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url +"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItem(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeCartItem,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
