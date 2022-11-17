import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import WebFont from 'webfontloader';
import Home from './components/Home/Home';
import ProductDetails from './components/product/ProductDetails';
import Products from './components/product/Products';
import Search from './components/product/Search';
import LoginSignUp from './components/user/loginSignUp';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto","Droid Sans","Chilanka"],
      },
    });
  },[]);
  return (
    <>
      <Router>
        <Header/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product/:id' element={<ProductDetails/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
        <Route exact path='/Search' element={<Search/>}/>
        <Route exact path='/login' element={<LoginSignUp/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
