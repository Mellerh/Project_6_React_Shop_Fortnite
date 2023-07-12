
export function reducer(state, action) {

    switch(action.type) {


        case 'GET_ALL_GOODS': {
            return{
                ...state, 
                goods: action.payload
            }
        }

        case 'SHOW_BASKET': {
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        }

        case 'ADD_TO_ORDER': {
            // создаём условие if
            if(!state.orderItems.includes(action.payload)) {
                return {
                    // возвращаем все ключи state, изменяя два из них
                    ...state, 
                    order: state.order + 1,
                    orderItems: [...state.orderItems, action.payload]
                }
            } else {
                return {
                    ...state
                }
            }
        }

        case 'REMOVE_FROM_BASKET': {
            return {
                ...state,
                order: state.order - 1,
                orderItems: state.orderItems.filter(item => item.id !== action.payload)
            }
        }

        default : 
            return state
    }

}