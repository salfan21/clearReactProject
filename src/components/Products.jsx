import { useEffect, useState } from 'react';
import './../style/components/products.scss'
import Product from './Product';

function Products({setState, state, setProd}) {
  const url = {
    products: 'http://localhost:3000/products',
    categories: 'http://localhost:3000/categories'
  }
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetch(url.products)
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          console.log(data)
        })
  },[])
  return (
    <div className="products">
       {products.map((product) => <Product key={product.id} product={product} setState={setState} state={state} setProd={setProd}/>)}
    </div>
  );
}


export default Products;