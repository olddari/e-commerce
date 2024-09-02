import React from 'react'
import './ShoeView.css'

const ShoeView = () => {
  return (
    <div>
      <div className="view">
        <div className="view-left">
            <img src="./images/product2.png" alt="" />
        </div>
        <div className="view-right">
            <h2>Adidas</h2>
            <p>adidas Originals Forum Mod Low Unisex Gri Spor Ayakkabı</p>
            <h2>4.799 TL</h2>
            <p>Sepette: 4.799 TL</p>
          <div className="view-left-size">
              <div id='size' className="38">38</div>
              <div id='size' className="39">39</div>
              <div id='size' className="40">40</div>
              <div id='size' className="41">41</div>
              <div id='size' className="42">42</div>
              <div id='size' className="43">43</div>
              <div id='size' className="44">44</div>
          </div>
          <button>Sepete Ekle</button>
        </div>
      </div>
      <hr />
      <div className="view-exp">
        <div className="exp">
            <h1>Ürün Ayrıntıları</h1>
            <p>Bu bileksiz adidas ayakkabı ile şık stili modern çağa taşı. Ayakkabının stil sahibi eğlenceli üst yüzeyi ve ikonik detayları, vintage Forum silüetini bugün için yeniden yaratır. EVA orta tabanı ve kauçuk dış tabanı ise her ortamda destek ve öz güven sunar. Bu ürün, en az %20 oranında geri dönüştürülmüş malzeme içerir. Halihazırda üretilmiş malzemeleri tekrar kullanarak, atıkların azalmasına, sınırlı kaynaklara olan bağımlılığımızı ve ürettiğimiz ürünlerin ayak izini azaltmaya yardımcı oluyoruz.</p>
        </div>
        <div className="exp-img"><img src="./images/product2.png" alt="" /></div>
      </div>
    </div>
  )
}

export default ShoeView
