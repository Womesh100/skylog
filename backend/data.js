// create object to return sample products.

//define data as an object
const data = {
  // define product as an array's object
  products: [
    {
      _id: '1', // _id used to compatible with mongodb
      name: 'nike slim shirt',
      slug: 'nike-slim-shirt',
      category: 'shirts',
      Image: '/images/p1.jpg', //679px X 829px
      price: 120,
      countInStock: 10,
      brand: 'nike',
      rating: 4.0,
      numReviews: 35,
      description: 'high quality shirts',
    },
    {
      _id: '2',
      name: 'adidas slim shirt',
      slug: 'adidas-slim-shirt',
      category: 'shirts',
      Image: '/images/p2.jpg',
      price: 100,
      countInStock: 10,
      brand: 'adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirts',
    },
    {
      _id: '3',
      name: 'nike slim pants',
      slug: 'nike-slim-pants',
      category: 'pants',
      Image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'nike',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality pants',
    },
    {
      _id: '4',
      name: 'adidas fit pants',
      slug: 'adidas-fit-pants',
      category: 'pants',
      Image: '/images/p4.jpg',
      price: 120,
      countInStock: 0,
      brand: 'adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pants',
    },
  ],
};

export default data;
