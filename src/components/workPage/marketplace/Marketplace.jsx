import React from 'react';
import mod from './Marketplace.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import Footer from '../../footer/Footer';
import workIcon from '../../../assets/workIcon.svg'
import marketplaceHomeImg from '../../../assets/marketplaceHomeImg.png'
import workIconMain1 from '../../../assets/workIcon1.png'
import workIconMain2 from '../../../assets/workIcon2.png'



function Marketplace(props) {

  const lockSvg = (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M20.0004 4.93328C18.2146 4.93328 16.502 5.64268 15.2392 6.90542C13.9765 8.16817 13.2671 9.88082 13.2671 11.6666V16.7333H26.7337V11.6666C26.7337 9.88082 26.0243 8.16817 24.7616 6.90542C23.4988 5.64268 21.7862 4.93328 20.0004 4.93328ZM29.9337 16.7333V11.6666C29.9337 9.03213 28.8872 6.50554 27.0243 4.64268C25.1615 2.77982 22.6349 1.73328 20.0004 1.73328C17.3659 1.73328 14.8393 2.77982 12.9765 4.64268C11.1136 6.50554 10.0671 9.03213 10.0671 11.6666V16.7333H8.33372C5.60912 16.7333 3.40039 18.942 3.40039 21.6666V33.3333C3.40039 36.0579 5.60912 38.2666 8.33372 38.2666H31.6671C34.3917 38.2666 36.6004 36.0579 36.6004 33.3333V21.6666C36.6004 18.942 34.3917 16.7333 31.6671 16.7333H29.9337ZM8.33372 19.9333C7.37643 19.9333 6.60039 20.7093 6.60039 21.6666V33.3333C6.60039 34.2906 7.37643 35.0666 8.33372 35.0666H31.6671C32.6244 35.0666 33.4004 34.2906 33.4004 33.3333V21.6666C33.4004 20.7093 32.6244 19.9333 31.6671 19.9333H8.33372Z" fill="white"/>
  </svg>
  )


  return (
    <div className={mod.wrapper}>
      <div className={mod.content}>
        <div className={mod.linkBlock}>
          <NavLink className={mod.link} to='../work'>
          <div className={mod.svg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5307 3.63636C10.8235 3.92925 10.8235 4.40412 10.5307 4.69702L5.97765 9.25002H15.8337C16.2479 9.25002 16.5837 9.58581 16.5837 10C16.5837 10.4142 16.2479 10.75 15.8337 10.75H5.97765L10.5307 15.303C10.8235 15.5959 10.8235 16.0708 10.5307 16.3637C10.2378 16.6566 9.76289 16.6566 9.47 16.3637L3.63666 10.5304C3.34377 10.2375 3.34377 9.76258 3.63666 9.46969L9.47 3.63636C9.76289 3.34346 10.2378 3.34346 10.5307 3.63636Z" fill="#909090"/>
            </svg>
          </div>
            <span>Back</span>
          </NavLink>
        </div>
        <div className={mod.header}>
          <div className={mod.titleBlock}>
            <h1 className={mod.title}>Marketplace Business Sale</h1>
            <p className={mod.subtitle}>MBS Invest is a marketplace for entrepreneurs that gives you the opportunity to become a co-owner of a profitable business or invest in profitable projects. In addition to investment offers, this platform provides for the presence of a personal account for the investor, in which user can manage portfolio of its companies.</p>
          </div>
          <nav className={mod.list}>
            <li className={mod.listItem}>Platform:  <span>Web</span></li>
            <li className={mod.listItem}>Year:  <span>2023 - Present</span></li>
            <li className={mod.listItem}>Company:  <span>MBS Invest</span> </li>
          </nav>
        </div>
        <div className={mod.homeImg}>
          <img src={marketplaceHomeImg} alt='marketplaceHomeImg'/>
        </div>

        <div className={mod.comingSoon}>
          <div className={mod.comingSoonImg}>{lockSvg}</div>
          <h2 className={mod.comingSoonTitle}>Coming soon...</h2>
          <p className={mod.comingSoonText}>The detailed description will appear in the near future</p>
        </div>
      </div>
      <hr/>

      <div className={mod.content}>
        <div className={mod.finalyBlock}>
          <h2 className={mod.title}>Related Projects</h2>
          <div className={mod.works}>
            <NavLink onClick={() => {window.scrollBy(0, 0)}} to='../work/virtual-assistance' className={mod.NavLink}>
              <div className={mod.item}>
                <div className={mod.imgBlock}>
                  <div className={mod.img}><img src={workIconMain1} alt="keys image" /></div>
                </div>
                  <div className={mod.info}>
                  <img src={workIcon} alt='work icon' className={mod.icon}/>
                  <p className={mod.place}>BEELINE</p>
                  <p className={mod.date}>APP • 2023</p>
                </div>
                <h3 className={mod.subtitleWork}>Virtual Assistance</h3>
              </div>
            </NavLink>
            <NavLink to='../work/Self-Teacher' className={mod.NavLink} >
              <div className={mod.item}>
                <div className={mod.imgBlock}>
                  <div className={mod.img}><img src={workIconMain2} alt="keys image" /></div>
                </div>
                  <div className={mod.info}>
                  <img src={workIcon} alt='work icon' className={mod.icon}/>
                  <p className={mod.place}>BEELINE</p>
                  <p className={mod.date}>APP • 2023</p>
                </div>
                <h3 className={mod.subtitleWork}>English Self-Teacher</h3>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    <hr/>
      <Footer/>
    </div>
    
  );
}

export default Marketplace;