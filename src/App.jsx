
import './style/common.scss'

import Header from './components/Header';
import Shop from './components/Shop';
import Products from './components/Products';
import Product_modal from './components/Product_modal';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState(false)
  // const [prod, setProd] = useState()
  let [prod, setProd] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:3000/basket')
      .then(res=>res.json())
      .then(res =>setProd =  setProd(res.length))
  },[])

  console.log(prod)

  return (
    <div className="App">
      <div className="container">
        <Header prod={prod}/>
        <Shop/>
        <Products setState={setState} state={state} setProd={setProd}/>
        {state ? <Product_modal prod={prod} setState={setState} state={state}/>:<div></div>}
      </div>
    </div>
  );
}

export default App;