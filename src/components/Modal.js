import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function Modal() {

const dispatch = useDispatch();

  return (
    <div className="modal_container">
      <div className="modal">
        <div>
          <h3>Remove all items ?</h3>
        </div>
        <div className="buttons">
          <button className="button red" onClick={()=> 
            { 
              dispatch(clearCart());
              dispatch(closeModal());
            
            }}>Remove Items</button>
          <button className="button" onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </div>
    </div>
  );
}



export default Modal;
