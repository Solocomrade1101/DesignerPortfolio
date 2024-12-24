import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MoreWinWin from './components/moreWinWin/MoreWinWin';
import { BrowserRouter as Router, Switch, Route, Routes, Form, useLocation } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import WorkPage from './components/workPage/WorkPage';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Assistance from './components/workPage/assistance/Assistance';
import Selfteacher from './components/workPage/self-teacher/Selfteacher';
import Marketplace from './components/workPage/marketplace/Marketplace'
import MoreBeeline from './components/moreBeeline/MoreBeeline';



function App() {
  document.querySelector('body').addEventListener('click', (e) => {
    let navigation = document.querySelector('.Sidebar_navigation__kfOlO')
    if (navigation.classList.contains('showNav') && e.target.className !== 'Sidebar_burger__PPlnq' && e.target.id !== 'svgBurger') {
      navigation.classList.remove('showNav')
      document.querySelector('body').classList.remove('overflowHidden')
      document.querySelector('.frameBurger').classList.remove('frameBurgerShow')
      document.querySelector('#svgBurger').classList.toggle('rotateSvg')
    }
  })

  function mainShowAnimated() {
    document.querySelector('.main').classList.add('mainShow')
    setTimeout(() => {
      document.querySelector('.main').classList.remove('mainShow')
    }, 600)
  }
  function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
      mainShowAnimated()
    }, [pathname]);
    return null
  }

  return (
    <>
      <ScrollToTop />
      <div className='frameBurger'></div>
      <div className="wrapper">
        <Sidebar />
        <div className='main'>
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work/virtual-assistance' element={<Assistance />} />
            <Route path='/work/Self-Teacher' element={<Selfteacher />} />
            <Route path='/work/Marketplace' element={<Marketplace />} />
            <Route path='/MoreBeeline' element={<MoreBeeline />} />
            <Route path='/MoreWinWin' element={<MoreWinWin />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
