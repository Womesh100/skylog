// define a functional component for Home Screen to route

import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map(
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
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
