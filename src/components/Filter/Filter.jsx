import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter'>
        <h4>Tüm Kadın</h4>
        <h1>Tüm Kadın (adett)</h1>
        <hr />
        <div className="filter-list">
            <div className="filter-list-left">
                <img className='filter-img' src="./images/filter.png" alt="" />
                <p>Filtrele</p>
            </div>
            <div className='filter-list-right'>
                <img className='sorting-img' src="./images/sorting.png" alt="" />
                <p className='sort'>Sırala:</p>
                <img src="./images/down.png" alt="" className="down" />
            </div>
        </div>
    </div>
  )
}

export default Filter
