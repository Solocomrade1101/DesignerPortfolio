import React from 'react';
import mod from './WorkPage.module.css'
import workIcon from '../../assets/workIcon.svg'
import workIconMain1 from '../../assets/workIcon1.png'
import workIconMain2 from '../../assets/workIcon2.png'
import workIconMain3 from '../../assets/workIcon3.png'
import workIconMain4 from '../../assets/workIcon4.png'

import winIcon from '../../assets/winIcon.svg'
import work3Icon from '../../assets/work3Icon.svg'
import figmaIcon from '../../assets/figmaIcon.svg'
import Footer from '../footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';

function WorkPage(props) {

  return (
    <div className={mod.wrapper}>
      <div className={mod.content}>
        <h1 className={mod.title}>Work</h1>
        <div className={mod.works}>
        <NavLink className={mod.link} to='virtual-assistance'>
          <div className={mod.item}>
            <div className={mod.imgBlock}>
              <div className={mod.img}><img src={workIconMain1} alt='workPreview'/></div>
            </div>
              <div className={mod.info}>
              <img src={workIcon}alt='work icon' className={mod.icon}/>
              <p className={mod.place}>BEELINE</p>
              <p className={mod.date}>APP • 2023</p>
            </div>
            <h3 className={mod.subtitle}>Virtual Assistance</h3>
          </div>
        </NavLink>
        <NavLink className={mod.link} to='Self-Teacher'>
          <div className={mod.item}>
          <div className={mod.imgBlock}>
              <div className={mod.img}><img src={workIconMain2} alt='workPreview'/></div>
            </div>
              <div className={mod.info}>
                <img src={workIcon} alt='work icon' className={mod.icon}/>
                <p className={mod.place}>BEELINE</p>
                <p className={mod.date}>APP • 2023</p>
              </div>
            
            <h3 className={mod.subtitle}>English Self-Teacher</h3>
          </div>
        </NavLink>
          
          <NavLink className={mod.link} to='Marketplace'>
            <div className={mod.item}>
          <div className={mod.imgBlock}>
              <div className={mod.img}><img src={workIconMain3} alt='workPreview'/></div>
            </div>
            <div className={mod.info}>
              <img src={work3Icon} alt='work icon' className={mod.icon}/>
              <p className={mod.place}>MBS</p>
              <p className={mod.date}>WEB • 2022-2023</p>
            </div>
            <h3 className={mod.subtitle}>Marketplace Business Sale</h3>
          </div>
          </NavLink>
          <a aria-label="go to the figma" href='https://www.figma.com/file/LjeSCddjRmnCGMI5wx8KQs/Other-work?type=design&node-id=810%3A3897&mode=design&t=Eg1SqvRB8iLhFj2k-1' target='_blanc' className={mod.link} to='virtual-assistance'>
            <div className={mod.item}>
          <div className={mod.imgBlock}>
              <div className={mod.img}><img src={workIconMain4} alt='workPreview'/></div>
            </div>
            <div className={mod.info}>
              <img src={figmaIcon} alt='work icon' className={mod.icon}/>
              <p className={mod.place}>OTHER WORK IN FIGMA</p>
              <p className={mod.date}> 2021-2023</p>
            </div>
            <h3 className={mod.subtitle}>Landings, websites and etc.</h3>
          </div>
          </a>
        </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default WorkPage;