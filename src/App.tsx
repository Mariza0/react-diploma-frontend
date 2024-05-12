import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CatalogPage } from "./pages/Catalog";
import { Layout } from "./components/Layout";
import './App.css'
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="/catalog.html" element={<CatalogPage />} />
           <Route path="/about.html" element={<About />} />
           <Route path="/contacts.html" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart.html" element={<CartPage />} />
          <Route path="/catalog/:id.html" element={<ProductPage  />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
