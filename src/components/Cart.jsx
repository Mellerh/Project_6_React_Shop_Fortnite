function Cart(props) {
    
    const { quantity = 0, showBasket = Function.prototype } = props;

    return(
            <div className="cartBasket green darketn-1 white-text" onClick={showBasket}>
                <i class="material-icons">add_shopping_cart</i>
                <span className="goodsQuantiti">{quantity}</span>
            </div>
    )
}

export default Cart;