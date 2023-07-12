import React, {createContext, useReducer} from "react";

// импортируем функцию reducer, которая будет вызываться ниже через disptach
import { reducer } from './reducer';


// создаём объект конекст
export const ShopContext = createContext();


// инициализируем начальные значения ключей state
const initialState = {
    goods: [],
    order: 0,
    orderItems: [],
    isBasketShow: false,
}


// создаём компонент Context, который будет передавать во всем свои дочерние элементы состояние initialState. 
export const ContextProvider = ({children}) => {

    // связываем Context с Reducer. value принимает initialState
    const [value, dispatch] = useReducer(reducer, initialState)


    value.getAllGoods = (data) => {
        dispatch({type: 'GET_ALL_GOODS', payload: data})
    }

    // создаём функции для value, которые ранее использовались в Main
    value.showBasket = () => {dispatch( {type: 'SHOW_BASKET'} )};

    value.addToOrder = (item) => { 
        dispatch( {type: 'ADD_TO_ORDER', payload: item} )
    };

    value.removeFromBasket = (id) => {dispatch( {type: 'REMOVE_FROM_BASKET', payload: id} )};




    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}