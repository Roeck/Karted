const BASE_URL = "http://localhost:3000/api/v1"

export const fetchProducts = () => dispatch => {
  fetch(`${BASE_URL}/products`)
    .then(res => res.json())
    .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
};