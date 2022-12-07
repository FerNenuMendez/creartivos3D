import { createContext, useState } from 'react'
import swal from 'sweetalert';

export const cartContext = createContext([])

const CartProvider=({children})=>{

    const [cart, setCart] = useState([])
    
    const addToCart = (product, quantity)=>{
            setCart([ ...cart,{product, quantity} ])
            swal({
                title: "El producto se agrego al carrito",
                icon: "success",
                button: "Ok",
                })
    }

    const cleanCart=()=>{
        setCart([])
    }

    return (
        <cartContext.Provider value={{cart, addToCart, cleanCart}} >
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider