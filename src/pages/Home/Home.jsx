import React from 'react'
import './Home.css'

import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import ShoeItem from '../../components/ShoeItem/ShoeItem'

const Home = () => {
  return (
    <div>
      <Header/>
      <ExploreMenu/>
      <hr />
      <h2>Sezonun Favori Modelleri</h2>
      <ShoeItem/>
    </div>
  )
}

export default Home
