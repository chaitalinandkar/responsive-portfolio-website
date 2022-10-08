import React from 'react'
import NavigationBar from './NavigationBar';
import Header from './Header';
import About from './About';
import Services from './Services';
import ServiceSatisfaction from './ServiceSatisfaction';
import Contact from "./Contact";

function Home() {
  return (
    <div className='home'>
      <NavigationBar />
      <Header />
      <About />
      <Services />
      <ServiceSatisfaction />
      <Contact />
    </div>
  )
}

export default Home