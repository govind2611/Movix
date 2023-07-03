import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/trending'
import Popular from './poupular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/> 
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <div style={{height : "1000px"}}></div> */}
    </div>
  )
}

export default Home