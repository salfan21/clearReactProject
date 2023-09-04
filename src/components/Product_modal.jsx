import { useEffect, useState } from 'react';
import './../style/components/product_modal.scss'
import Product from './Product';

function Product_modal({prod, setState, state}) {

  return (
    <div className="product_modal">
       <div className="product_modal_window">
          <div className="close" onClick={()=>setState(!state)}>X</div>
          <p>small info:{prod.description.small}</p>
          <p>full info{prod.description.full}</p>
       </div>
    </div>
  );
}


export default Product_modal;