// Get slog(path) from url and show it in the screen.
// We need a hook to do this from react router dom and name of the hook is @params

import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

/**
 * fetch products from backend
 * need a reducer like HomeScreen.js
 *  */
const reducer = (state, action) => {
  switch (action.type) {
    // we start sending request using ajax to backend
    // ...state we keep previous state value and update only loading values
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [], //show only one product at a time
    loading: true,
    error: '',
  });
  // define a state to save the product from backend
  //const [product, setProduts] = useState([]); // creating default useState() array
  useEffect(() => {
    // use this function only one time after rendering a call
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`); // send ajax request using axios and put in a result variable
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //    setProduts(result.data);
    };
    fetchData();
  }, [slug]);
  /**
   * here url is as a dependecy as when there is change in slug
   * means user changes between pages
   * fetchData() will dispatch again and get new product from backend
   */
  // UI part

  /***
   * use conditional rendering
   * if loading show loading
   * else if error show error
   * otherwise show data of the product
   * */
  return loading ? (
    <div>loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>{product.name}</div>
  );
}
export default ProductScreen;

// to show product information action
