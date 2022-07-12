import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    <div className="product" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.Image} alt={product.Image} />
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
  );
}

export default Product;
