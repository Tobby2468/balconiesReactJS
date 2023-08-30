import React from 'react'
import "./hero.css"
import Heading from '../../common/Heading'

const Hero = () => {
  return (
    <>
    <section className='hero'>
    <div className='container'>
        <Heading title= "Search Your Next Home" subtitle= "New & Featured Property in your area."/>
        <form className='flex'>
            <div className="box">
                <span>City/Street</span>
                <input type="text" placeholder='Location' />
            </div>
            <div className="box">
                <span>Property Type</span>
                <input type="text" placeholder='Property Type' />
            </div>
            <div className="box">
                <span>Price Range</span>
                <input type="text" placeholder='Price Range' />
            </div>
            <div className="box">
                <h4>Advance Filter</h4>
            </div>
            <button className='btn'>
                <i className='fa fa-search'></i>
            </button>
        </form>
    </div>
    </section>
    </>
  )
}

export default Hero