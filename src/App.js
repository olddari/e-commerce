import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kadin from "./pages/Kadin/Kadin";
import Erkek from "./pages/Erkek/Erkek";
import Indirimler from "./pages/Indirimler/Indirimler";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ShoeView from "./pages/ShoeView/ShoeView";


function App() {

  //const [showLogin, setShowLogin] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    {buttonPopup? <LoginPopup/>:<></>}
      <div className='app'>
      <Navbar setButtonPopup = {setButtonPopup} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/kadin" element={<Kadin/>} />
        <Route path="/erkek" element={<Erkek/>} />
        <Route path="/indirimler" element={<Indirimler/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/PlaceOrder" element={<PlaceOrder/>} />
        <Route path="ShoeView" element={<ShoeView/>} />
      </Routes>
      <Footer></Footer>
      <LoginPopup/>
    </div>
    </>
  );
}

export default App;
