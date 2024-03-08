import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import NewProduct from './components/NewProduct';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import EditProduct from './components/EditProduct';

function App() {
  //hooks-encapsule un logique
  const [currentRoute, setCurrentRoute] = useState();
  
  useEffect(()=>{
    const path = window.location.pathname.toLowerCase();
    console.log(path.slice(1,path.length));
    setCurrentRoute(path.slice(1,path.length));
  }, [])

  return (
    //Routage    
    <BrowserRouter>
     <nav className='m-1 p-1 border border-info'>
      <ul className='nav na-pills'>
        <li>
          <Link onClick={() => setCurrentRoute("home")} 
          className={currentRoute=="home"?"btn btn-info ms-1":"btn btn-outline-info ms-1"} 
          to={"/home"}>Home</Link>
        </li>
        <li>
          <Link onClick={() => setCurrentRoute("products")} 
          className={currentRoute=="products"?"btn btn-info ms-1":"btn btn-outline-info ms-1"} 
          to={"/products"}>Products</Link>
        </li>
        <li>
          <Link onClick={() => setCurrentRoute("newProduct")} 
          className={currentRoute=="newProduct"?"btn btn-info ms-1":"btn btn-outline-info ms-1"} 
          to={"/newProduct"}>New Product</Link>
        </li>
      </ul>
     </nav>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/newProduct' element={<NewProduct/>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
