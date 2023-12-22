import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/productid" element={<ProductDetails />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
