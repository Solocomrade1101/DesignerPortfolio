import React from 'react';
import mod from './MoreWinWin.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import moreWinWinImg1 from '../../assets/moreWinWinImg1.png'
import moreWinWinImg2 from '../../assets/moreWinWinImg2.png'
import moreWinWinImg3 from '../../assets/moreWinWinImg3.png'
import moreWinWinImg4 from '../../assets/moreWinWinImg4.png'
import Footer from '../footer/Footer';


function MoreWinWin(props) {
  return (
    <div className={mod.wrapper}>
      <div className={mod.content}>
        <div className={mod.linkBlock}>
          <NavLink className={mod.link} to='../'>
          <div className={mod.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5307 3.63636C10.8235 3.92925 10.8235 4.40412 10.5307 4.69702L5.97765 9.25002H15.8337C16.2479 9.25002 16.5837 9.58581 16.5837 10C16.5837 10.4142 16.2479 10.75 15.8337 10.75H5.97765L10.5307 15.303C10.8235 15.5959 10.8235 16.0708 10.5307 16.3637C10.2378 16.6566 9.76289 16.6566 9.47 16.3637L3.63666 10.5304C3.34377 10.2375 3.34377 9.76258 3.63666 9.46969L9.47 3.63636C9.76289 3.34346 10.2378 3.34346 10.5307 3.63636Z" fill="#909090"/>
          </svg>
          </div>
            <p>Back</p>
          </NavLink>
        </div>
        <div className={mod.header}>
          <div className={mod.titleBlock}>
            <h1 className={mod.title}>What I did at Win-Win</h1>
            <ul className={mod.subtitle}>
              <li className={mod.subtitleItem}>– Made several successful cryptocurrencies and play2earn (NFT based) games</li>
              <li className={mod.subtitleItem}>– Launched several social corporate networks for different employees from concept to implementation </li>
              <li className={mod.subtitleItem}>– Created the universal design system for Web products</li>
              <li className={mod.subtitleItem}>– Worked closely with the development team throughout all stages</li>
            </ul>
          </div>
          <nav className={mod.list}>
            <li className={mod.listItem}>Format:  <span> Remote</span></li>
            <li className={mod.listItem}>Role:   <span> Product Designer</span></li>
            <li className={mod.listItem}>Years:  <span>2021 - 2022</span> </li>
          </nav>
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Cherkizovo portal</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>This is a corporate portal for Cherkizovo employees, designed like a dashboard, in which all important sections are located on one page. Users can easily follow all the information and go to the specific sections.</p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreWinWinImg1} alt="image" />
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Grey Badlands</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>Grey Badlands is a NFT game in which users take on the shoes of an alien general and lead their own colony. The game's functionality is based on choice the right troops, exploiting the planet's resources and trading with them.</p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreWinWinImg2} alt="image" />
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Galaxy Horses</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>Landing page for the upcoming NFT game, which is designed to add potential players to the waiting list and give some information about game’s roadmap.</p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreWinWinImg3} alt="image" />
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Space Farm</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>Space Farm is a NFT game in which users can explore new worlds, fight in the dungeons, and collect valuable resources. </p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreWinWinImg4} alt="image" />
        </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default MoreWinWin;