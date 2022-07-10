// Create express servers - npm install express

import express from 'express';
import data from './data.js';

//Creating an express app
const app = express();

// Exposing an json data to use as an api with paths
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// defining a port and try to get port from process.env to access free port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`); // callback function when server is ready.
}); // server start and ready to response

// to start server { node <file name ex- server.js> } in backend
