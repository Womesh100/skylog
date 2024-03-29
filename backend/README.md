# Here we will use node as backend

# npm init - by doing so we will generate package.json file

## Steps to Create Node.js Server

1. run npm init in root folder
2. Update package.json set type: 'module'
3. Add .js to imports
4. npm install express
5. create server.js
6. add start command as node backend/server.js -- start server.js
7. require express
8. create route for / return backend is ready.
9. move products.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start

# install nodemon to auto run if any change in project --> npm install nodemon --save-dev

## Steps to Fetch products from backend

1. set proxy in package.json frontend
2. npm install axios library to get data from backend -->npm install axios
3. use state hook - useState() is a function returns an array that contains a variable and a function to update the variable
4. use effect hook
5. use reducer hook

# Manage State by Reducer Hook

1.  define reducer
2.  update fetch data
3.  get state from useReducer
4.  handle loading box case during ajax call and if error show errors

# npm install use-reducer-logger --force => a package to log state changes

# Create Product and Rating Component

1.  create Rating component
2.  Create Product component
3.  Use Rating component in Product component

# Create a Product Details Screen

1.  fetch product from backend
2.  create 3 columns for image, info and action
3.  Add space from top
4.  Add product title in title page
    a. use package react-helmet async
    b. npm install react-helmet-async

# Create Loading and Message Component

(Add spin loading and if user enter wrong url then show as message)

1.  Create loading component
2.  use spinner component
3.  create message component
4.  create utils.js to define getError function

A. Implement Add to Cart function 1. Create react context - to save cart item in global state and use it in components. (Store.js) 2. define reducer 3. create store provider 4. implement add to cart button click handler.

B. Complete Add to Cart 1. check exist item in the cart 2. check count in stock in backend

C. Create Cart Screen 1. create 2 columns 2. display items list 3. create action column

D. Complete Cart Screen 1. click handler for increase/decrease item 2. click handler for remove item 3. click handler for checkout

# Create Sign-in Page

    1. create sign in form
    2. add email and password
    3. add signin button

# Connect to MongoDB Database

    1. create atlas mongodb database on cloud server
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
