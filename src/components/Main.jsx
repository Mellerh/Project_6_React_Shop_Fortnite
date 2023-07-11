import React, {useState, useEffect} from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from './BasketList';
import ShowAddedItems from './heplers/ShowAddedItems'


function Main() {

    // список товаров
    const [goods, setGoods] = useState([]);
    // количество товаров в корзине
    const [order, setQuantity] = useState(0);
    // список добавленных товаров
    const [orderItems, setOrderItems] = useState([]);

    // полноценная корзина с товарами
    const [isBasketShow, setBasketShow] = useState(false);

    // состояние нажатой кнопки
    const [clickedBtn, setClickedBtn] = useState(false);



    // создаём функцию добавления товара в корзину
    function addToOrder(item) {

        // если в orderItems нет товара, то добавляем товар в корзину
        if (!orderItems.includes(item)) {
            setQuantity(prev => prev + 1);
            
            // каждый раз иммутабельно добавляем товар в корзину с помощью ... spread
            setOrderItems([...orderItems, item]);
        }
    }



    // функция показывает/скрывает полноценную корзину с товарами
    function showBasket() {
        setBasketShow(!isBasketShow)
    }


    // функция получает id товара из корзины у даляет его из 
    function removeFromBasket(id) {
        // уменьшаем количество товаров в иконке корзины
        setQuantity(prev=> prev - 1);

        // если id нажатого товара совпадает с id из orderItems, удаляем элемент
        setOrderItems(orderItems.filter(item => item.id !== id)
        );
        
    }


    // useEffect отрабатывает при первом монтировании Main и делает запрос товаров 
    useEffect(function getGoods(){
        fetch(API_URL, {
            headers: {
                'Authorization': 'e42b03ab-b0e8997d-3a506eb7-9d9d4430'
            }
        })
        .then(response => response.json())
        .then(data => setGoods(data.featured))
        .catch(err => console.log(err))


        // при размонитровании Main (обновления страницы), обновляем localStorage, где хранятся количетсво добавленных товаров
        return()=> {
            localStorage.clear()
        }
    }, [])

    

    return(
        <main className="main container content">
        

        {clickedBtn ? <ShowAddedItems /> : null}


        {/* полноценная корзина с товарами */}
        {
            isBasketShow ? <BasketList orderItems={orderItems} showBasket={showBasket} removeFromBasket={removeFromBasket}/> : null
        }

        {/* иконка корзины */}
        <Cart quantity={order} showBasket={showBasket}/>
        
        {
            goods ? 

                (goods.length ? 
                    <GoodList 
                        goods={goods}
                        addToOrder={addToOrder}
                    /> 
                    :
                <Preloader />)

            : <h3>Nothing found</h3>
        }
            

        </main>
    )
}

export default Main;