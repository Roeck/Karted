export const productsReducer = (
    state = {
        products: [],
        success: true,
    },
    action
) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
        }
    };