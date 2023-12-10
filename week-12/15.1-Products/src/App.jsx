import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { ProductDetail } from "./Pages/Products/ProductDetail/ProductDetail";
import { NotFound } from "./Pages/NotFound-404/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="products" element={<Products />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
