import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="container">
      <div className='header'>
      <div className="header-contents">
        <p>Stiline benzersiz dokunuşlar katacak özel <br/>parçaları indirmle keşfet. Lorem <br /> ipsum dolor sit amet.</p>
        <button>Alışverişe Başla</button>
      </div>
      
      <div className='header1'>
        <div className="header-contents1">
        <h1>YENİ GELENLER</h1>
        <p>Trend Modellerle Tarzını Yükselt</p>
        <button>Keşfet</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
