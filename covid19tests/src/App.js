import React, { useState } from 'react'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';  // imoprtirane Routes of folderot routes za polesno navigiranje
import {BrowserRouter as Router} from "react-router-dom";

// Kompozicijata na folderite gi vidov na youtube deka vo 2021 taka preferiraat da gi pravat react proektite
// Odnosno front za kako izgleda aplikacijata i back se sto treba za da raboti aplikacijata vo pozadina


const App = () => {

  const {productItems} = data; // Tuka gi zimame site podatici za kovid testovite od data.js i gi stavame vo app vo promenilvata data;
  const [cartItems, setCartItems] = useState([]); // Tuka gi zadavame promenilivite za cart

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(
        cartItems.map((item) =>   
          item.id === product.id
          ? {...ProductExist, quantity : ProductExist.quantity + 1} //AKO postoi produkt doadi mu uste eden za da ima opcija za povece kupuvanja na ist prodkukt
          : item
        )
      );
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}]); // Ako nema produkt, dodadi 1 produkt
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) =>
         item.id === product.id 
         ? {...ProductExist, quantity : ProductExist.quantity -1}
         : item
         )
      )
    }
  }

  const handleRemoveAll = () =>{
    setCartItems([]);
  }
  
  
  return(
  <div>
    <Router> 

      <Header cartItems = {cartItems}> {/* Kolku itemi ima vo kosnickata koga gi dodadvame*/}
      </Header>

      <Routes 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct = {handleRemoveProduct}
        handleRemoveAll = {handleRemoveAll}
      ></Routes>
   
    </Router>
    
  </div>
  );
};

export default App;