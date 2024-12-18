import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header.js";
import Landing from "./Components/Landing.js";
import Footer from "./Components/Footer.js";
import Store from "./Components/Store.js";
import Filter from "./Components/Filter.js";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
