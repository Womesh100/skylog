// define a functional component for Home Screen to route

import { useEffect, useReducer /* useState */ } from 'react';
//import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';

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
  // checking the state of an object in console we use logger (to test)
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
      <Helmet>
        <title>SKYLOG</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div> // show error message
        ) : (
          <Row>
            {/*jsx expession to get product info*/}
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                {/* mb-3 = margin from bottom is 3 rem */}
                {/* Creating a product component and use product in multiple places*/}
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
