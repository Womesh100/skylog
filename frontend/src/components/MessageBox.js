import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  //if variant exist set the variant user exists else use info as a default variant
  // and render the content inside the children of alert
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
