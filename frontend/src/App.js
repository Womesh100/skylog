import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      {/* d-flex = display flex, flex-column = set flag direction, site-container = set this div to min height of 100vh 
          flex is added for footer text*/}
      <div className="d-flex flex-column site-container">
        <header className="">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>SKYLOG</Navbar.Brand>
              </LinkContainer>
              {/**define items in a cart and show as a batch */}
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {/**by clicking on Add to cart only quatity gets increased not item of the product till now */}
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      {/**
                       * To show cart quantity -
                       * a = accumulator, c = currentItem
                       * set current value for accumulatior = 0
                       * now go to ProductScreen.js and use quantity for dispatch action
                       */}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          {/**
           * adding space in page from top
           * mt-3 => margin from top is 3rem.
           * */}
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">@ All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
