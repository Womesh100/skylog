import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

/**using card component from bootstrap to create a box in home screen for each product items */

function Product(props) {
  const { product } = props;

  /**
   * Get access to the context
   * from state context cart
   * and from cart context cartItem because list cartItems in the screen
   */
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const {
    cart: { cartItems }, //constructing cartItems here
  } = state;

  const addToCartHandler = async (item) => {
    // check if current product from cart exists in our store or not.
    const existsItem = cartItems.find((x) => x._id === product._id);
    // Find the quantity
    // if product exists then increase cart value else set quantity to 1
    const quantity = existsItem ? existsItem.quantity + 1 : 1;
    //Ajax request to get data from backend using Product id for current product
    //and check it is not less than quantity we add
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Produt is out of stock');
      return;
    }
    /**
     * to add items in the cart
     * we need to dispatch an action on react context
     */

    cxtDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }, //getting quantity value from cart else get quantity as 0 from app.js
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        {/**card-img-top is from bootstrap card to put image on top of the card */}
        <img src={product.Image} className="card-img-top" alt={product.Image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        <Button>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
