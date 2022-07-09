import data from './data';

function App() {
  return (
    <div className="">
      <header className="">
        <a href="/">SKYLOG</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map(
            //jsx expession
            (product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.Image} alt={product.Image} />{' '}
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
