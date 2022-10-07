import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Modal from "./components/Modal";
import isDisplayed from "./features/modal/modalSlice";

function App() {
  
  const { cartItems } = useSelector((store) => store.cart);
  const {isDisplayed} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      { (isDisplayed) && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
