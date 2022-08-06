// Get slog(path) from url and show it in the screen.
// We need a hook to do this from react router dom and name of the hook is @params

import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../util';
import { Store } from '../Store';

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
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) }); //getError from utils and pass error object to function
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
  //get the context
  const { state, dispatch: cxtDispatch } = useContext(Store);
  // get the state to cart
  const { cart } = state;
  //usecontext = we have access to state of context and change the context.
  const addToCartHandler = async () => /*async because of await key*/ {
    //
    // check if current product from cart exists in our store or not.
    const existsItem = cart.cartItems.find((x) => x._id === product._id);
    // if product exists then increase cart value else set quantity to 1
    const quantity = existsItem ? existsItem.quantity + 1 : 1;
    // Ajax request for current product and check it is not less than quantity we add
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alerrt('Sorry. Product is out of stock');
      return;
    }
    /**
     * to add items in the cart
     * we need to dispatch an action on react context
     */

    cxtDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });
  };
  // UI part

  /***
   * use conditional rendering
   * if loading show loading
   * else if error show error
   * otherwise show data of the product
   * */
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    // to show product information action
    <div>
      <Row>
        {/**
         * show 3 columns
         * first occupy half of the width for image
         * second occupy 3/12 of the width for product_info
         * third occupy 3/12 of the width for card (product_action)
         */}
        <Col md={6}>
          <img
            className="img-large"
            src={product.Image}
            alt={product.name}
          ></img>
        </Col>
        {/**
         * Display list of items
         * used ListGroup to show items in a list
         * set variant to flush to remove border and curve from it
         * items in a list group is ListGroup.Item
         * first item is product name
         * second item rating and reviews
         * third item Price
         * forth product description
         * */}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/**for title */}
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description :<p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                      {/* button with full width */}
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen;
