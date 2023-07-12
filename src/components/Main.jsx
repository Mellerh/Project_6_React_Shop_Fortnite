import React, {useState, useEffect, useContext} from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from './BasketList';
import ShowAddedItems from './heplers/ShowAddedItems';

import { ShopContext } from '../context';



function Main() {

    const {
        goods, order, orderItems, isBasketShow, getAllGoods
    } = useContext(ShopContext)




    // useEffect отрабатывает при первом монтировании Main и делает запрос товаров 
    useEffect(function getGoods(){
        fetch(API_URL, {
            headers: {
                'Authorization': 'e42b03ab-b0e8997d-3a506eb7-9d9d4430'
            }
        })
        .then(response => response.json())
        .then(data => getAllGoods(data.featured))
        .catch(err => console.log(err))


        // при размонитровании Main (обновления страницы), обновляем localStorage, где хранятся количетсво добавленных товаров
        return()=> {
            localStorage.clear()
        }
    }, [])

    

    return(
        <main className="main container content">
        

        {/* полноценная корзина с товарами */}
        {
            isBasketShow ? <BasketList /> : null
        }

        {/* иконка корзины */}
        <Cart />
        
        {
            goods ? 

                (goods.length ? <GoodList /> : <Preloader />)

            : <h3>Nothing found</h3>
        }
            

        </main>
    )
}

export default Main;