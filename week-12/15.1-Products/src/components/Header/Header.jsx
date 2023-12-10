import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  let navigate = useNavigate();
  return (
    <header>
      <nav>
        <button
          onClick={() => {
            navigate("");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("products");
          }}
        >
          Products
        </button>
      </nav>
    </header>
  );
};
