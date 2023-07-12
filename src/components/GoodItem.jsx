import  React, { useState, useEffect, useContext } from 'react';
import './heplers/ItemButton.css';
import ShowAddedItems from './heplers/ShowAddedItems';

import { ShopContext } from '../context';

function GoodItem(props) {
    // деструктурируем ключи из объекта props и присваиваем им значения по умолчанию, чтобы программа не крашнулась
    const {
        id='',
        name='',
        description='',
        price='',
        full_background=''

    } = props.good || {}

    const [btnClicked, setBtnClicked] = useState(false);


    const { addToOrder } = useContext(ShopContext)

    // при изменении transform вызываем компонент ShowAddedItems на 1.5сек и удаляем интервал
    useEffect(()=>{
        let setId;
        setId = setInterval(()=>{
            setBtnClicked(false)
            
        }, 1500);

        return()=> clearInterval(setId);
    }, [btnClicked])



    return(
        <div className='mainCard'>

            {btnClicked ? <ShowAddedItems name={name}/> : null}

            {/* если full_background true, то есть с сервера пришло фото*/}
            {full_background ? 

                <div className="card" id={id}>

                    <div className="card-image">
                        <img src={full_background} alt={name}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                        <p>{description}</p>
                    </div>

                    <div className="card-action">

                    {/* функцию добавления addToOrder из компонента Context добавляет товар в корзину */}
                        <button 
                            onClick={()=>{
                                addToOrder(props.good);
                                
                                setBtnClicked(true)
                                }}
                            className="cssbuttons-io-button">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                            </svg>
                            
                            <span>Добавить</span>
                        </button>
                        <span className="right item-price">{price} руб.</span>
                    </div>

                </div>


                // если фото с сервера не пришло, ничего не отрисовываем
                : null 
            }

        </div>
    )
}

export default GoodItem;





