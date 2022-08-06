// Create express servers - npm install express

import express from 'express';
import data from './data.js';

//Creating an express app
const app = express();

// Exposing an json data to use as an api with paths
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// :slug get slug that user enters - backend Api
app.get('/api/products/slug/:slug', (req, res) => {
  //to get data for this product from backend
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// :id get product id that user enters - backend Api
app.get('/api/products/:id', (req, res) => {
  //to get data for this product from backend
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// defining a port and try to get port from process.env to access free port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`); // callback function when server is ready.
}); // server start and ready to response

// to start server { node <file name ex- server.js> } in backend
