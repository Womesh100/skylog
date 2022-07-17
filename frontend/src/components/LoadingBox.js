// creating a universal loading and will show everywhere for Loading
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  // show a spinner icon but if not possible for some device then, just show Loading... as a text
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
