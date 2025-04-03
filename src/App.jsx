import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Landing from "./Components/Landing.jsx";
import Footer from "./Components/Footer.jsx";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";
import Shipping from "./Components/Shipping.jsx";
import CourierForm from "./Components/AddressForm.jsx";
import SignInForm from "./Components/Login.jsx";
import RegisterForm from "./Components/Registration.jsx";
import AddressForm from "./Components/AddressForm.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/form" element={<CourierForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
