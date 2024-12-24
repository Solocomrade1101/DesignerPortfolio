import React from 'react';
import Presentation from './presentation/Presentation';
import Work from './work/Work';
import Testimonials from './testimonials/Testimonials';
import Experience from './experience/Experience';
import Footer from '../footer/Footer';
function HomePage(props) {
  return (

    <>
      <div className="content">
        <Presentation />
      </div>
      <hr />
      <div className="content">
        <Work />
      </div>
      <hr />
      <div className="content">
        <Testimonials />
      </div>
      <hr />
      <div className="content">
        <Experience />
      </div>
      <hr />
      <div className="content">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;