import React from 'react';
import mod from './MoreBeeline.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import moreBeelineImg1 from '../../assets/moreBeelineImg1.png'
import moreBeelineImg2 from '../../assets/moreBeelineImg2.png'
import moreBeelineImg3 from '../../assets/moreBeelineImg3.png'
import moreBeelineImg4 from '../../assets/moreBeelineImg4.png'
import moreBeelineImg5 from '../../assets/moreBeelineImg5.png'
import moreBeelineImg6 from '../../assets/moreBeelineImg6.png'
import moreBeelineImg7 from '../../assets/moreBeelineImg7.png'
import Footer from '../footer/Footer';





function MoreBeeline(props) {
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
            <h1 className={mod.title}>What I did at Beeline</h1>
            <ul className={mod.subtitle}>
              <li className={mod.subtitleItem}>– Completely improved the logic and redesigned of 4 content mobile apps in accordance with the guidelines</li>
              <li className={mod.subtitleItem}>– Launched non-telecom products from concept to implementation across iOS, Android, Web</li>
              <li className={mod.subtitleItem}>– Worked on user engagement products in gamification</li>
              <li className={mod.subtitleItem}>– Introduced several banking products in the fintech section</li>
            </ul>
          </div>
          <nav className={mod.list}>
            <li className={mod.listItem}>Format:  <span> Remote</span></li>
            <li className={mod.listItem}>Role:   <span> Product Designer</span></li>
            <li className={mod.listItem}>Years:  <span>2022 - Present</span> </li>
          </nav>
        </div>
        
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Widget for replenishment the balance</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>The new balance replenishment widget helped solve the problem with displaying the name of the balance, and also increased the conversion to replenishment of the balance, since initially not all users understood the meaning of the plus icon.</p>
            </div>
          </div>
        </div>
        <div className={mod.examplesBlock}>
          <div className={mod.exampleBlock}><img src={moreBeelineImg1} className={mod.exampleImg}/></div>
          <div className={mod.exampleBlock}><img src={moreBeelineImg2} className={mod.exampleImg}/></div>
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Subscription builder at Beeline Cloud</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>Price cards were designed in such a way that the user understands which periods will be the most profitable and that it is possible to compare the monthly cost for each period separately. The subscription builder was implemented both in the application and on the website.</p>
            </div>
          </div>
        </div>
        <div className={mod.examplesBlock}>
          <div className={mod.exampleBlock}><img src={moreBeelineImg3} className={mod.exampleImg}/></div>
          <div className={mod.exampleBlock}><img src={moreBeelineImg4} className={mod.exampleImg}/></div>
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Replace Ringback tone</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>One of the content applications that allows you to install favorite tracks instead of ringback tone, as well as configure certain sound conditions. In addition to the application, a web service with similar functionality was designed.</p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreBeelineImg5} alt="image" />
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Locator</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>One of the content applications that allows you to track the location of loved ones, set up tracking areas, monitor their movement history and phone charge. If the person being tracked needs help, it can easily text you or call you.</p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreBeelineImg6} alt="image" />
        </div>
      </div>
      <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Widget for entering bank card details</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <p className={mod.contextParagraph}>The redesign of the widget for entering bank card details. The design of a real map was taken as a reference to make the user experience as convenient and familiar as possible. </p>
            </div>
          </div>
        </div>
        <div className={mod.exampleMainImg}>
          <img src={moreBeelineImg7} alt="image" />
        </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default MoreBeeline;