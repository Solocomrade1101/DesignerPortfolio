import React from 'react';
import mod from './Work.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import workIconMain1 from '../../../assets/workIcon1.png'
import workIconMain2 from '../../../assets/workIcon2.png'
import workIconMain3 from '../../../assets/workIcon3.png'
import workIcon from '../../../assets/workIcon.svg'
import work3Icon from '../../../assets/work3Icon.svg'


function Work(props) {
  return (
    <div className={mod.work}>
      <h2 className={mod.title}>Featured Work</h2>
      <div className={mod.works}>
      <NavLink className={mod.link} to='/work/virtual-assistance'>
        <div className={mod.item}>
          <div className={mod.imgBlock}>
            <div className={mod.img}><img src={workIconMain1} alt='workPreview'/></div>
          </div>
            <div className={mod.info}>
            <img src={workIcon} alt='work icon' className={mod.icon}/>
            <p className={mod.place}>BEELINE</p>
            <p className={mod.date}>APP • 2023</p>
          </div>
          <h3 className={mod.subtitle}>Virtual Assistance</h3>
        </div>
      </NavLink>
      <NavLink className={mod.link} to='/work/Self-Teacher'>
        <div className={mod.item}>
        <div className={mod.imgBlock}>
            <div className={mod.img}><img src={workIconMain2} alt='workPreview'/></div>
          </div>
          <div className={mod.info}>
            <img src={workIcon} alt='work icon'  className={mod.icon}/>
            <p className={mod.place}>BEELINE</p>
            <p className={mod.date}>APP • 2023</p>
          </div>
          <h3 className={mod.subtitle}>English Self-Teacher</h3>
        </div>
      </NavLink>
      <NavLink className={mod.link} to='/work/Marketplace'>
        <div className={mod.item}>
        <div className={mod.imgBlock}>
            <div className={mod.img}><img src={workIconMain3} alt='workPreview'/></div>
          </div>
          <div className={mod.info}>
            <img src={work3Icon} alt='work icon'  className={mod.icon}/>
            <p className={mod.place}>MBS invest</p>
            <p className={mod.date}>WEB • 2022-2023</p>
          </div>
          <h3 className={mod.subtitle}>Marketplace Business Sale</h3>
        </div>
      </NavLink>
        
      </div>
      <NavLink to='/work' className={mod.buttonBlock}>
        <button  className={mod.button}>View All Work</button>
        <button  className={mod.buttonShow}>View All Work</button>
      </NavLink>
      
    </div>
  );
}

export default Work;