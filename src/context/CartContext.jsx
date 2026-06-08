/* eslint-disable react-refresh/only-export-components */
import  {createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems, setcartItems] = useState([]);

    const addToCart = (product)=>{
        setcartItems((prevItems) =>{
            const isExisting = prevItems.find((item) => item.id === product.id);

            if(isExisting){
                return prevItems.map((item) =>
                item.id === product.id ? {...item,quantity: item.quantity + 1 } : item);

            }
            return [...prevItems, {...product, quantity: 1}];
        });
    };
    return (
        <CartContext.Provider value={{cartItems, addToCart}}>{children}</CartContext.Provider>
    );
}