import { useState } from 'react';
import BasketItem from './BasketItem';
import './heplers/BasketList.css';



function BasketList(props = []) {

    // вытаскиваем функцию удаления товара из корзины
    const { removeFromBasket } = props;
    

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
        <ul class="collection basket-item">

            {/* Корзина товара и крестик с возможностью закрытия корзины */}
            <li href="#!" class="collection-item active basket-items-name">Корзина товаров: 

                <span class="secondary-content close-basket" onClick={props.showBasket}>
                    <i class="material-icons">clear</i>
                </span>
                
            </li>
            

            {/* если корзина не пустая, то вызываем BasketItem и отрисоываем все добавленные товары*/}
            {   
                props.orderItems.length 
                ? 
                    (props.orderItems.map(item => (
                        <BasketItem 
                            key={item.id} 
                            item={item}
                            getTotalPrice={getTotalPrice}
                            removeFromBasket={removeFromBasket}
                            decreaseTotalPrice={decreaseTotalPrice}
                        />
                    )))
                :
                    <li class="collection-item">Корзина пуста.</li>
            }
            
            
            {/* раздел с общей стоимостью */}
            <li href="#!" class="collection-item active basket-items-name">
                Общая стоиомсть: {totalPrice} руб.
            </li>
            
            {/* кнопка оформления  */}
            <li href="#!" class="collection-item basket-items-name">
                <button class="btn waves-effect waves-light" type="submit" name="action">Оформить
                    <i class="material-icons right">send</i>
                </button>
            </li>

        </ul>
    )
}


export default BasketList;