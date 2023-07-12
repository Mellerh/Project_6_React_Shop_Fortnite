import './heplers/BasketList.css';
import { useEffect, useState, useContext } from "react";

import {ShopContext} from '../context';



function BasketItem(props) {
    // деструктурируем props на отдельный переменные
    const {id, name, price} = props.item || {};
    const { getTotalPrice, decreaseTotalPrice } = props || {};
    
    
    // достаём функцию из компонента Context
    const { removeFromBasket = Function.prototype } = useContext(ShopContext)


    // создаём state с изначальным количеством товаров в корзине
    const [itemsQuantity, setItemsQuantity] = useState(getLocalQuantity());

    // создаём state для подсчёта общей стоиомсти товаров
    const [itemsPrice, setItemsPrice] = useState(0)



    // функция берёт количество товаров из localStorage и вызывается в состояние itemsQuantity
    function getLocalQuantity() {
        return localStorage.getItem(id) ? +localStorage.getItem(id) : 1
    }


    
    // функция увеличивает количетсво штук товара в корзине и отправляет getTotalPrice со стоиомстью товара для увеличения суммы в корзине
    function increaseQuantity() {
        setItemsQuantity(prev => prev + 1);
        getTotalPrice(price);
    }

    // функция уменьшает количетсво штук товара в корзине и вызывает decreaseTotalPrice для уменьшения стоимости корзины
    function decreaseQuantity() {
        if(itemsQuantity > 1) {
            setItemsQuantity(prev => prev - 1);
            decreaseTotalPrice(price);
        }
    }


  
    // функция будет отправлять общую стоиомсть товара в родительский компонент BasketList при первом монтировании BasketItem
    useEffect(() => {
        setItemsPrice(price * itemsQuantity)
        getTotalPrice(itemsPrice)
    }, [itemsPrice])
    


    useEffect(()=> {
        localStorage.setItem(id, itemsQuantity);
    }, [itemsQuantity])



    return (
        <li className="collection-item">
            {name}

            <span className='item-separator' 
                onClick={()=> {
                    decreaseQuantity()
            }}><i className="material-icons basket-quan">remove</i></span>

            {price} x {itemsQuantity} 

            <span className='item-separator' 
                onClick={()=> {
                        increaseQuantity()}}>
                <i className="material-icons basket-quan">add</i>
            </span>

            = {price * itemsQuantity} руб. 


            {/* крестик для удаления товара из корзины */}
            <span className="secondary-content" onClick={()=>{
                removeFromBasket(id);
                decreaseTotalPrice(price * itemsQuantity);
                localStorage.setItem(id, 1);


            }}>

                <i className="material-icons">clear</i>
            </span>
        </li>
    )
}

export default BasketItem;