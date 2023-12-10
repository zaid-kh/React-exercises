import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { items } from "../../store";

export const Products = () => {
  let navigate = useNavigate();
  const products = items;
  // console.log("products: ", products);

  function viewProduct(product) {
    navigate(`./${product.id}`, { state: { product } });
  }

  return (
    <>
      <h1>Products</h1>
      <ul className="products-list">
        {products ? (
          products.map((item) => {
            return (
              <li
                className="product-item"
                key={item.id}
                onClick={() => {
                  viewProduct(item);
                }}
              >
                {item.title}
              </li>
            );
          })
        ) : (
          <h2>No items found</h2>
        )}
      </ul>
    </>
  );
};
