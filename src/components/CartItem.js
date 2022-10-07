import React from 'react'
import "./CartItem.css";
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai';
import {MdOutlineDeleteForever} from 'react-icons/md';
import {removeItemFromCart, increaseAmountItem, decreaseAmountItem} from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';

function CartItem({image, title, price, amount, id}) {


  const dispatch = useDispatch();

  return (
    <div className='cart_item'>
        <div className='img_container'><img src={image} alt="electronics" /></div>
        <div className='cart_item__title'>{title}</div>
        <div className='cart_item__price'>${price}</div>
        <div className='cart_item__amount'>
            <AiFillCaretUp className='amount_caret' onClick={() => dispatch(increaseAmountItem({id}))}/>
            <h4>{amount}</h4>
            <AiFillCaretDown className='amount_caret' onClick={() => dispatch(decreaseAmountItem({id}))} />
        </div>
        <div className='cart_item_delete'>
          <MdOutlineDeleteForever  onClick={() => dispatch(removeItemFromCart(id))}/>
        </div>
    </div>
  )
}

export default CartItem