import React from 'react';
import mod from './Selfteacher.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
import Footer from '../../footer/Footer';

import selfTeacherImg1 from '../../../assets/selfTeacherImg1.png'
import selfTeacherImg2 from '../../../assets/selfTeacherImg2.png'
import selfTeacherImg3 from '../../../assets/selfTeacherImg3.png'
import selfTeacherImg4 from '../../../assets/selfTeacherImg4.png'
import selfTeacherImg5 from '../../../assets/selfTeacherImg5.png'
import figmaIcon from '../../../assets/figmaIcon.svg'
import workIcon from '../../../assets/workIcon.svg'
import workIconMain4 from '../../../assets/workIcon4.png'
import workIconMain1 from '../../../assets/workIcon1.png'




function Selfteacher(props) {
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
            <h1 className={mod.title}>English Self-Teacher</h1>
            <p className={mod.subtitle}>This is the MVP of one of the content applications of the mobile operator. This service helps users learn English on their own. You can study foreign works of various writers, read books in original, translate individual words and entire paragraphs in this application.</p>
          </div>
          <nav className={mod.list}>
            <li className={mod.listItem}>Platform:  <span>App</span></li>
            <li className={mod.listItem}>Year:  <span>2023</span></li>
            <li className={mod.listItem}>Company:  <span>Beeline Russia</span> </li>
          </nav>
        </div>
        <div className={mod.homeImg}>
          <img src={selfTeacherImg1} alt='teacherHomeImg'/>
        </div>
      </div>
    <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Context</h2>
          <div className={mod.contextTextBlock}>
            <div className={mod.contextText}>
              <h5 className={mod.contextSubtitle}>Problem</h5>
              <p className={mod.contextParagraph}>One of the company's goals for the current year was to update the visual style and user flow of all content applications, since they were simply outdated. One of these applications was an English tutorial. Since the previous version of the application was fully supported by the vendor, we decided to develop the application from scratch so that it would be under our management.</p>
            </div>
            <div className={mod.contextText}>
              <h5 className={mod.contextSubtitle}>Goal</h5>
              <p className={mod.contextParagraph}>My task was to design the mvp service in which the user could easily select and read books in English, translate words and entire paragraphs, and also manage his subscription. Our common goal was to transfer this product from the vendor to our management and create a foundation for further development.</p>
            </div>
            
          </div>
        </div>
      </div>
    <hr/>
      <div className={mod.content}>
        <div className={mod.contextBlock}>
          <h2 className={mod.contextTitle}>Working process</h2>
          <div className={mod.contextTextBlock}>
              <div className={mod.contextText}>
                <h5 className={mod.contextSubtitle}>Beginning of work</h5>
                <p className={mod.contextParagraph}>
                  <p className={mod.contextParagraphItem}>During a discussion with the team, we decided that the ability to read books would be a key feature of mvp (similar to an electronic library), since at this stage we had a number of functional limitations.</p>
                  
                  <p className={mod.contextParagraphItem}>It was decided that on the main page we will have a complete list of books with quick filtering by genre, complexity and authors. We have postponed the mechanics of displaying various personal selections and offers for the next stages.</p>
                </p>
              </div>
              <div className={mod.contextText}>
                <h5 className={mod.contextSubtitle}>Hypothesis Testing</h5>
                <p className={mod.contextParagraph}>
                  <p className={mod.contextParagraphItem}>After the first version of the mockups was assembled, we sent them for usability testing. Together with the product manager, we compiled a list of hypotheses to test them and identify possible problem areas.</p>
                  
                  As a result, we obtained a number of data: <p>1. Most users had a positive impression of using the application; they noted its simplicity, convenience and speed of solving their problems.</p><p>2. A small part of users did not immediately understand how to translate entire paragraphs. <br /> To solve this problem, we decided to add a short onboarding so that the user could familiarize himself with the functionality of the application upon first login.</p>
                </p>
              </div>
          </div>
        </div>

        <div className={mod.exampleMainImg}>
        <img src={selfTeacherImg2} alt="image" />
        </div>
        <p className={mod.exampleText}>Login screen and first onboarding</p>

        <div className={mod.examplesBlock}>
          <div>
            <div className={mod.exampleBlock}>
              <img src={selfTeacherImg3} className={mod.exampleImg}/>
            </div>
            <p className={mod.exampleBlockText}>Filter screen</p>
          </div>
          <div>
            <div className={mod.exampleBlock}>
              <img src={selfTeacherImg4} className={mod.exampleImg}/>
            </div>
            <p className={mod.exampleBlockText}>Book page and text settings</p>
          </div>
        </div>

        <div className={mod.exampleMainImg}>
          <img src={selfTeacherImg5} alt="image" />
        </div>
        <p className={mod.exampleText}>Activating the subscription with a promotional code</p>

        <div className={mod.resultBlock}>
          <h2 className={mod.resultTilte}>Results</h2>
          <nav className={mod.resultList}>
            <li>Unfortunately, this project is partially in production. Development is currently on hold</li>
            <li>By communicating with users and analyzing their feedback, I gained valuable experience that may be useful for future projects</li>
          </nav>
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
            <a className={mod.NavLink} aria-label="go to the figma" href='https://www.figma.com/file/LjeSCddjRmnCGMI5wx8KQs/Other-work?type=design&node-id=810%3A3897&mode=design&t=Eg1SqvRB8iLhFj2k-1' target='_blanc'>
              <div className={mod.item}>
                <div className={mod.imgBlock}>
                  <div className={mod.img}><img src={workIconMain4} alt="keys image" /></div>
                </div>
                  <div className={mod.info}>
                  <img src={figmaIcon} alt='work icon' className={mod.icon}/>
                  <p className={mod.place}>OTHER WORK IN FIGMA</p>
                  <p className={mod.date}> 2021 - 2023</p>
                </div>
                <h3 className={mod.subtitleWork}>Landings, websites and etc.</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    <hr/>
      <Footer/>
    </div>
  );
}

export default Selfteacher;