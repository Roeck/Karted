export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case 'CART_ADD_ITEM':
            return {
                ...state,
                cartItems: action.payload.cartItems,
            };
    }
}