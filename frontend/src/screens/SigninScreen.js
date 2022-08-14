import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom'; // a hook from react-router-dom

export default function SigninScreen() {
  // To get 'redirect' variable value from url
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  // Check if redirectInUrl available set in redirect variable else set redirect as home Screen
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    //Create container for signin form.
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      {/**my-3 = create margin from top and bottom to 3 rem */}
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          {/**Form.control : Creates input box for us */}
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          {/**Form.control : Creates input box for us */}
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
