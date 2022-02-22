export const productsReducer = (
  state = {
    products: [],
    success: true,
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
   
    // See Details of a Product
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload,
      };
   
    default:
      return state;
  }
};