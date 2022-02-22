export const addToCart = (product, qty) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;

  cartItems.forEach(item => {
    if (item.id === product.id) {
      alreadyExists = true;
      item.qty += qty;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, qty });
  }

  dispatch({
    type: 'CART_ADD_ITEM',
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};