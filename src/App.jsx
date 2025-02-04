import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/import';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;