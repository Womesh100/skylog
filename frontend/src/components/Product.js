import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

/**using card component from bootstrap to create a box in home screen for each product items */

function Product(props) {
  const { product } = props;
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
        <Button>Add to cart</Button>
        <Button>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
