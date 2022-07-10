// define a functional component for Home Screen to route

import { useEffect, useReducer /* useState */ } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    // we start sending request using ajax to backend
    // ...state we keep previous state value and update only loading values
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // define a state to save the product from backend
  //const [products, setProduts] = useState([]); // creating default useState() array
  useEffect(() => {
    // use this function only one time after rendering a call
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products'); // send ajax request using axios and put in a result variable
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //    setProduts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div> // show error message
        ) : (
          products.map(
            //jsx expession
            (product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.Image} alt={product.Image} />{' '}
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
