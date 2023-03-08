import React from 'react';
import {FaMinus, FaPlus} from 'react-icons/fa';


function AmountButtons({increase, decrease, amount}) {
    

  return (
    <div className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}><FaMinus></FaMinus></button>
      <button type="button" className="amount">{amount}</button>
      <button type="button" className="amount-btn" onClick={increase}><FaPlus></FaPlus></button>
    </div>
  );
}

export default AmountButtons;
