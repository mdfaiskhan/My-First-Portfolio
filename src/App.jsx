import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Abcd from './components/abcd/Abcd';
import Experience2 from './components/experience2/Experience2';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Experience2/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Abcd /> 
      <Footer />
    </>
  )
}

export default App
