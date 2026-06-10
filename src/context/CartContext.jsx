/* eslint-disable react-refresh/only-export-components */
import  {createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({children}){

    const incrementQuantity = (productId) => {
        setcartItems(
            cartItems.map((item) => 
                item.id === productId ? {...item, quantity: item.quantity + 1} : item

        )
        );
    };

    const decrementQuantity = (productId) => {
        setcartItems(
            cartItems.map((item) => {
                if(item.id === productId){
                    if(item.quantity > 1){
                        return {...item, quantity:item.quantity -1};
                    }
                    return null;

                }
                return item;
            }).filter(Boolean)
        );
    };

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
        <CartContext.Provider value={{cartItems, addToCart, incrementQuantity, decrementQuantity}}>{children}</CartContext.Provider>
    );


}
export default CartProvider;