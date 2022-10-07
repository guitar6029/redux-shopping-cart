import "./CartContainer.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

function CartContainer() {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return (
    <div className="cart_container">
      <h3 className="cart_title">Your Shopping Cart</h3>

      {amount >= 1 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            amount={item.amount}
          />
        ))
      ) : (
        <div className="empty_cart">Your cart is empty</div>
      )}

      <div className="total_container">
        <h3>Total : ${total.toFixed(2)}</h3>
      </div>
      <div className="clear_shopping_cart">
       {(amount < 1) ? null :  <button onClick={() => dispatch(openModal())}>
          Clear Shopping Cart
        </button>}
      </div>
    </div>
  );
}

export default CartContainer;
