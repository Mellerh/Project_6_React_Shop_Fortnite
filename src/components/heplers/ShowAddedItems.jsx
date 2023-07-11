import '../../index.css';

function ShowAddedItems(props) {
    

    return (
        <div className='toaster-container toast-position toster-animation'>
            <div className='toast'>{props.name} добавлен в корзину</div>
        </div>
    )
}

export default ShowAddedItems;