import GoodItem from './GoodItem';

function GoodList(props=[]) {
    // console.log(props.goods[0].mainId);

    return(
        <div className='good-list'>

            { 
                props.goods.map(good => (
                    <GoodItem 
                        good={good} 
                        key={good.id}
                        addToOrder={props.addToOrder}
                    />
                ))
            }

        </div>
    )
}

export default GoodList;