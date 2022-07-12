import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import { LinkContainer } from 'react-router-bootstrap';
function App() {
  return (
    <BrowserRouter>
      <div className="">
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
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
