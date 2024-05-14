import Navbar from "./Navbar/Navbar";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useValue } from "../src/userContext";
import ProductCard from "./ProductCard/ProductCard";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const navigate = useNavigate();
  const { user, setUser } = useValue();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (userOne) => {
      if (userOne) {
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
        setUser("");

        navigate("/signin");
      }
    });
  }, [user]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
