import { Link, useLocation, useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();

  //* New solution using useLocation hook
  const { state } = useLocation();
  console.log("state: ", state);
  let product = null;
  if (state) product = state.product;
  return (
    <>
      <section className="product-details">
        {product ? (
          <>
            <h3>{product.title}</h3>
            <h4>{product.size}</h4>
            <img src={product.imageUrl} alt={product.title} />
            <h5>{product.price} $</h5>
          </>
        ) : (
          <h2>No product with id {id} found</h2>
        )}
        <Link to={"./.."}>
          <button>Back</button>
        </Link>
      </section>
    </>
  );
};
