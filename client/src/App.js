import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Navbar from './Container/Navbar';
import Categorie from './Container/Categorie';
import Home from './Container/Home';
import Subproduct from './Container/Subproduct';
import Product from './Container/Product';


const User = () => <div>User</div>;
function App() {  

  return (
    <div> 
      <Navbar/>     
      <Routes> 
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/categorie/:id" element={ <Categorie/>} />
              <Route exact path="/subcategorie/:id" element={ <Subproduct/>} />
              <Route exact path="/product/:id" element={<Product />} />  
      </Routes>
     
    </div>
  );
}

export default App;
