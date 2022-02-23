export const productsReducer = (
  state = {
    products: [],
    product: [],
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
    
    // Create a Product Review and Save It
    case 'SAVE_PRODUCT_REVIEW':
      return {
        ...state,
        success: true,
        review: action.payload,
      };
   
    default:
      return state;
  }
};