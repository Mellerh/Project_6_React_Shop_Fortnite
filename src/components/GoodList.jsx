import { useContext } from 'react';
import { ShopContext } from '../context';

import GoodItem from './GoodItem';

function GoodList() {
    

    const {goods} = useContext(ShopContext);

    return(
        <div className='good-list'>

            { 
                goods.map(good => (
                    <GoodItem good={good} key={good.id}/>
                ))
            }

        </div>
    )
}

export default GoodList;