import React from 'react'
import Layout from '../../components/Layout'
import HeroSection from '../../components/HeroSection'
import Filter from '../../components/Filter'
import ProductCard from '../../components/ProductCard'
import Track from '../../components/Track'
import Testimonial from '../../components/Testimonial'



function Home() {
   
  
  
  return (
    
      <Layout>
        
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
        
      </Layout>
    
  )
}

export default Home