import { useState, useContext } from 'react';
import {ShopContext} from '../context';

import BasketItem from './BasketItem';
import './heplers/BasketList.css';



function BasketList() {

    // вытаскиваем функцию удаления товара из корзины
    const { 
        orderItems = [], 
        showBasket = Function.prototype 
    } = useContext(ShopContext);
    

    // создаём state для отображения общей стоиомсти всех товаров. стоимость будет получать через функцию у BasketItem
    const [totalPrice, setTotalPrice] = useState(0)
    

    // функция получит общую стоимость из BasketItem и изменяет свой state totalPrice
    function getTotalPrice(price) {
        setTotalPrice(prev => prev + price)
    }

    // функция уменьшает общую стоиомсть при удалении товара из корзины
    function decreaseTotalPrice(price) {
        setTotalPrice(prev => prev - price)
    }


    return(
        <ul className="collection basket-item">

            {/* Корзина товара и крестик с возможностью закрытия корзины */}
            <li href="#!" className="collection-item active basket-items-name">Корзина товаров: 

                <span className="secondary-content close-basket" onClick={showBasket}>
                    <i className="material-icons">clear</i>
                </span>
                
            </li>
            

            {/* если корзина не пустая, то вызываем BasketItem и отрисоываем все добавленные товары*/}
            {   
                orderItems.length ? 
                    (orderItems.map(item => (
                        <BasketItem 
                            item={item}
                            getTotalPrice={getTotalPrice}
                            decreaseTotalPrice={decreaseTotalPrice}

                            key={item.id} 
                        />
                    )))
                :
                <li className="collection-item">Корзина пуста.</li>
            }
            
            
            {/* раздел с общей стоимостью */}
            <li href="#!" className="collection-item active basket-items-name">
                Общая стоиомсть: {totalPrice} руб.
            </li>
            
            {/* кнопка оформления  */}
            <li href="#!" className="collection-item basket-items-name">
                <button className="btn waves-effect waves-light" type="submit" name="action">Оформить
                    <i className="material-icons right">send</i>
                </button>
            </li>

        </ul>
    )
}


export default BasketList;