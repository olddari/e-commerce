import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup';




const Navbar = () => {

    const [menu,setMenu] = useState("Ana sayfa");
    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}></LoginPopup>
      <div className='navbar'>
      <img src="./images/logo.png" alt="" className="logo" />
      <ul className="navbar_menu">
        <Link to='/'><li onClick={()=> setMenu("Ana sayfa")} className={menu==="Ana sayfa"?"active":""}>Ana Sayfa</li></Link>
        <Link to='/Kadin'><li onClick={()=> setMenu("kadin")} className={menu==="kadin"?"active":""}>KADIN</li></Link>
        <Link to='/erkek'><li onClick={()=> setMenu("erkek")} className={menu==="erkek"?"active":""}>ERKEK</li></Link>
        <Link to='/indirimler'><li onClick={()=> setMenu("indirimler")} className={menu==="indirimler"?"active:":""}>İNDİRİMLER</li></Link>
      </ul>
      <div className="navbar_right">
        <img className='nav-icons' src="./images/search.png" alt="" />
        <img onClick={() => setButtonPopup(true)} id='btn-modal' className='nav-icons' src="./images/user.png" alt="" />
        <img className='nav-icons' src="./images/heart.png" alt="" />
        <div className="navbar_search_icon">
            <Link to='/cart'><img className='nav-icons' src="./images/cart.png" alt="" /></Link>
            <div className="dot"></div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar

//<LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
//</LoginPopup>
