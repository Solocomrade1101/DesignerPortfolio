import React from 'react';
import mod from './Experience.module.css'
import beelineIcon from '../../../assets/beelineIcon.svg'
import winIconB from '../../../assets/winIconB.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
function Experience(props) {
  return (
    <div className={mod.experience}>
      <h3 className={mod.title}>Experience</h3>
      <div className={mod.items}>
        <div className={mod.item}>
          <div className={mod.img}><img src={beelineIcon} alt="beeline logo" /></div>
          <p className={mod.date}>2022 - 2023</p>
          <h4 className={mod.subtitle}>Beeline Telecom</h4>
          <p className={mod.text}>Beeline is a leading CIS telecommunications company with over 13 million MAU in its mobile app. The company offers a wide range of services, including mobile, fixed-line, and internet services.</p>
          <NavLink to='/MoreBeeline'  className={mod.buttonBlock}>
            <button  className={mod.button}>What I did at Beeline</button>
            <button  className={mod.buttonShow}>What I did at Beeline</button>
          </NavLink>
          
        </div>
        <div className={mod.item}>
          <div className={mod.img}><img src={winIconB} alt="win logo" /></div>
          <p className={mod.date}>2021 - 2022</p>
          <h4 className={mod.subtitle}>Win-Win Software Solutions</h4>
          <p className={mod.text}>Win-Win is a custom software development company that takes an approach from conception to product launch from scratch with ongoing support.</p>
          <NavLink to='/MoreWinWin'  className={mod.buttonBlock}>
            <button  className={mod.button}>What I did at Win-Win</button>
            <button  className={mod.buttonShow}>What I did at Win-Win</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Experience;