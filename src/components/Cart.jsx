import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
    
    const { 
        order = 0, 
        showBasket = Function.prototype 
    } = useContext(ShopContext);

    return(
            <div className="cartBasket green darketn-1 white-text" onClick={showBasket}>
                <i className="material-icons">add_shopping_cart</i>
                <span className="goodsQuantiti">{order}</span>
            </div>
    )
}

export default Cart;