import React, { useState } from 'react'
import './ShoeItem.css'
import { Link } from 'react-router-dom'



const ShoeItem = () => {

  const [itemCount,setItemCount]  = useState(0)

  return (
    <div>
      <hr className='hr' />
      <h2 className='hr'>Sezonun Favori Modelleri</h2>
      <div className='food-item'>
      
      <Link to={'/ShoeView'}>
      <div className='aaa'>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
        {!itemCount
          ?<img className='like' onClick={()=>setItemCount(prev=>prev+0)} src="./images/add.png" alt="" />
          :<div className='food-item-counter'>

          </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>
      </Link>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product1_1.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product1_1.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product1_1.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product1_1.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product3.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>

      <div>
      <div className='food-item-img-container'>
        <img src="./images/product2.png" alt="" />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>Name</p>
        </div>
        <p className="food-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='food-item-price'>2.200 TL</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ShoeItem
