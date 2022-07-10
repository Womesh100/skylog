// define a functional component for Home Screen to route

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';

function HomeScreen() {
  // define a state to save the product from backend
  const [products, setProduts] = useState([]); // creating default useState() array
  useEffect(() => {
    // use this function only one time after rendering a call
    const fetchData = async () => {
      const result = await axios.get('/api/products'); // send ajax request using axios and put in a result variable
      setProduts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map(
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
