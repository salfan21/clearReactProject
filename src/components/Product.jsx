import './../style/components/product.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function Product({product, setState, state, setProd}) {

    const {id, title, img, description, priece, catedory} = product;
    
    const productHandler = (e) =>{
      if(e.target.matches('path') || e.target.matches('button') || e.target.matches('svg')){
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:3000/basket";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        let data = JSON.stringify({"title": id});
        xhr.send(data);
        fetch('http://localhost:3000/basket')
          .then(res=>res.json())
          .then(res => setProd(res.length))
      }else{
        setState(!state)
        setProd(product)
      }
      
    }

  return (
    <div className="product" onClick={(e) => productHandler(e)}>
      {priece.sale !== null ? <div className='product_sale'>sale</div>:<div></div>}
       <div className="product_thumbnail">
        <img src={ img } alt={ title } />
       </div>
       <h4 className='product_title'>{ title }</h4>
       <div className="product_priece-block">
        <div className='con'>
            <div className="product_priece">
           { priece.sale !== null ?<p className='sale_priece'><span>{priece.value}</span> <br /> <span>{priece.sale}</span></p>:<p>{priece.value}</p>}
            </div>
        <button className='product_btn-buy'><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
       </div>
    </div>
  );
}


export default Product;