import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <Banner />
      <Nav />
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <About />
      <br /><br className='hidden lg:block'/>
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <Services />
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <Work />
      <br className='hidden lg:block'/><br className='hidden lg:block'/>
      <Contact />
      <br />
    </div>
  );
};

export default App;
