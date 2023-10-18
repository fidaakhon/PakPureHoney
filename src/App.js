import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Products from './Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';


function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [productId, setProductId] = useState(0);
  const showDetails = (id) => {
    // console.log(id);
    setShowDetail(!showDetail);
    setProductId(id);
    // console.log(productId); 
  };


  return (
    <>

      <div id='home'>
        <div className="overlay">
          <Header />
        </div>
        <div className="sliderr">
          <Slider />
        </div>
      </div>
      <div id="products">
      {showDetail ? <ProductsDetails showDetails={showDetails} productId={productId} /> : <Products showDetails={showDetails} />}
        {/* <Products showDetails={showDetails} /> */}
      </div>
      <div id='about'>
        <AboutUs />
      </div>
      <div id='contact'>
        <ContactUs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
