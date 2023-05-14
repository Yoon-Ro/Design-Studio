import React from 'react'
import {Hero, Info, Service, Process, Price, Faq, Cta} from "../components/index";

const Main = () => {
  return (
    <div className='bg-[#ffffff]'>
        <Hero/>
        <Info/>
        <Service/>
        <Process/>
        <Price/>
        <Faq/>
        <Cta/>
      
    </div>
  )
}

export default Main