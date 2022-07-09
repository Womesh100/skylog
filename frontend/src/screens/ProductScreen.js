// Get slog(path) from url and show it in the screen.
// We need a hook to do this from react router dom and name of the hook is @params

import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
