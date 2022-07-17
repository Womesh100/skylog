import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import { LinkContainer } from 'react-router-bootstrap';
function App() {
  return (
    <BrowserRouter>
      {' '}
      {/* d-flex = display flex, flex-column = set flag direction, site-container = set this div to min height of 100vh 
          flex is added for footer text*/}
      <div className="d-flex flex-column site-container">
        <header className="">
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>SKYLOG</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          {' '}
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
