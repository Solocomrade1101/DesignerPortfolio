import React from 'react';
import mod from './Sidebar.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';


function Sidebar(props) {
  const homeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M8.37045 2.25073C8.81028 1.83293 9.39376 1.59998 10.0004 1.59998C10.6071 1.59998 11.1906 1.83294 11.6304 2.25077C11.6304 2.25075 11.6304 2.25078 11.6304 2.25077L16.9446 7.29827C17.3412 7.67506 17.6571 8.12865 17.8729 8.63135C18.0887 9.13406 18.2 9.67541 18.2 10.2225V15.8333C18.2 16.461 17.9506 17.063 17.5068 17.5068C17.063 17.9506 16.461 18.2 15.8333 18.2H4.16665C3.53898 18.2 2.937 17.9506 2.49317 17.5068C2.04933 17.063 1.79999 16.461 1.79999 15.8333V10.2225C1.79999 9.67541 1.91128 9.13406 2.1271 8.63135C2.34291 8.12865 2.65874 7.67511 3.05536 7.29831L8.37045 2.25073C8.37048 2.2507 8.37042 2.25076 8.37045 2.25073ZM10.0004 2.99998C9.7526 2.99998 9.51427 3.09514 9.33461 3.26581L4.01961 8.31331C4.01958 8.31334 4.01964 8.31328 4.01961 8.31331C3.7607 8.5593 3.55444 8.85547 3.41355 9.18364C3.27265 9.51185 3.19999 9.8653 3.19999 10.2225V15.8333C3.19999 16.0897 3.30183 16.3356 3.48312 16.5168C3.6644 16.6981 3.91028 16.8 4.16665 16.8H15.8333C16.0897 16.8 16.3356 16.6981 16.5169 16.5168C16.6981 16.3356 16.8 16.0897 16.8 15.8333V10.2225C16.8 9.8653 16.7273 9.51185 16.5864 9.18364C16.4455 8.85545 16.2393 8.55935 15.9804 8.31336C15.9804 8.31334 15.9804 8.31337 15.9804 8.31336L10.6662 3.26586C10.4866 3.09518 10.2482 2.99998 10.0004 2.99998Z" fill="#909090"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M9.16665 11.5333C8.91028 11.5333 8.6644 11.6351 8.48312 11.8164C8.30183 11.9977 8.19999 12.2436 8.19999 12.5V16.8H11.8V12.5C11.8 12.2436 11.6981 11.9977 11.5169 11.8164C11.3356 11.6351 11.0897 11.5333 10.8333 11.5333H9.16665ZM7.49317 10.8265C7.937 10.3826 8.53897 10.1333 9.16665 10.1333H10.8333C11.461 10.1333 12.063 10.3826 12.5068 10.8265C12.9506 11.2703 13.2 11.8723 13.2 12.5V17.5C13.2 17.8866 12.8866 18.2 12.5 18.2H7.49999C7.11339 18.2 6.79999 17.8866 6.79999 17.5V12.5C6.79999 11.8723 7.04933 11.2703 7.49317 10.8265Z" fill="#909090"/>
</svg>)
const workIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M3.59999 6.69999C3.09099 6.69999 2.69999 7.10198 2.69999 7.57142V15.4286C2.69999 15.898 3.09099 16.3 3.59999 16.3H16.4C16.909 16.3 17.3 15.898 17.3 15.4286V7.57142C17.3 7.10198 16.909 6.69999 16.4 6.69999H3.59999ZM1.29999 7.57142C1.29999 6.3051 2.34168 5.29999 3.59999 5.29999H16.4C17.6583 5.29999 18.7 6.3051 18.7 7.57142V15.4286C18.7 16.6949 17.6583 17.7 16.4 17.7H3.59999C2.34168 17.7 1.29999 16.6949 1.29999 15.4286V7.57142Z" fill="#909090"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.95657 2.91151C7.37148 2.51636 7.92723 2.29999 8.49999 2.29999H11.5C12.0727 2.29999 12.6285 2.51636 13.0434 2.91151C13.4595 3.30777 13.7 3.8527 13.7 4.42856V5.99999C13.7 6.38659 13.3866 6.69999 13 6.69999C12.6134 6.69999 12.3 6.38659 12.3 5.99999V4.42856C12.3 4.24666 12.2244 4.06487 12.0779 3.9253C11.9302 3.78464 11.7229 3.69999 11.5 3.69999H8.49999C8.27709 3.69999 8.06979 3.78464 7.92209 3.9253C7.77555 4.06487 7.69999 4.24666 7.69999 4.42856V5.99999C7.69999 6.38659 7.38659 6.69999 6.99999 6.69999C6.61339 6.69999 6.29999 6.38659 6.29999 5.99999V4.42856C6.29999 3.8527 6.5405 3.30777 6.95657 2.91151Z" fill="#909090"/>
</svg>)

const userIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M3.81467 12.9813C4.57106 12.2249 5.59696 11.8 6.66666 11.8H13.3333C14.403 11.8 15.4289 12.2249 16.1853 12.9813C16.9417 13.7377 17.3667 14.7636 17.3667 15.8333V17.5C17.3667 17.8866 17.0533 18.2 16.6667 18.2C16.2801 18.2 15.9667 17.8866 15.9667 17.5V15.8333C15.9667 15.1349 15.6892 14.4651 15.1954 13.9713C14.7015 13.4774 14.0317 13.2 13.3333 13.2H6.66666C5.96826 13.2 5.29846 13.4774 4.80462 13.9713C4.31077 14.4651 4.03333 15.1349 4.03333 15.8333V17.5C4.03333 17.8866 3.71993 18.2 3.33333 18.2C2.94673 18.2 2.63333 17.8866 2.63333 17.5V15.8333C2.63333 14.7636 3.05827 13.7377 3.81467 12.9813Z" fill="#909090"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 3.19999C8.54566 3.19999 7.36667 4.37897 7.36667 5.83332C7.36667 7.28767 8.54566 8.46665 10 8.46665C11.4544 8.46665 12.6333 7.28767 12.6333 5.83332C12.6333 4.37897 11.4544 3.19999 10 3.19999ZM5.96667 5.83332C5.96667 3.60577 7.77246 1.79999 10 1.79999C12.2276 1.79999 14.0333 3.60577 14.0333 5.83332C14.0333 8.06087 12.2276 9.86665 10 9.86665C7.77246 9.86665 5.96667 8.06087 5.96667 5.83332Z" fill="#909090"/>
</svg>)

const contactIcon =(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M3.59999 4.69999C3.06334 4.69999 2.69999 5.10346 2.69999 5.49999V14.5C2.69999 14.8965 3.06334 15.3 3.59999 15.3H16.4C16.9366 15.3 17.3 14.8965 17.3 14.5V5.49999C17.3 5.10346 16.9366 4.69999 16.4 4.69999H3.59999ZM1.29999 5.49999C1.29999 4.24652 2.37663 3.29999 3.59999 3.29999H16.4C17.6233 3.29999 18.7 4.24652 18.7 5.49999V14.5C18.7 15.7535 17.6233 16.7 16.4 16.7H3.59999C2.37663 16.7 1.29999 15.7535 1.29999 14.5V5.49999Z" fill="#909090"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2.46852 4.54445C2.72012 4.25092 3.16203 4.21693 3.45555 4.46852L10 10.078L16.5444 4.46852C16.838 4.21693 17.2799 4.25092 17.5315 4.54445C17.7831 4.83797 17.7491 5.27988 17.4556 5.53148L10.4556 11.5315C10.1934 11.7562 9.80659 11.7562 9.54445 11.5315L2.54445 5.53148C2.25092 5.27988 2.21693 4.83797 2.46852 4.54445Z" fill="#909090"/>
</svg>)

const burgerMenu = (<svg id='svgBurger' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2.5 3.55556C2.5 3.2756 2.61121 3.00712 2.80917 2.80917C3.00712 2.61121 3.2756 2.5 3.55556 2.5H6.72222C7.00217 2.5 7.27066 2.61121 7.46861 2.80917C7.66657 3.00712 7.77778 3.2756 7.77778 3.55556V6.72222C7.77778 7.00217 7.66657 7.27066 7.46861 7.46861C7.27066 7.66657 7.00217 7.77778 6.72222 7.77778H3.55556C3.2756 7.77778 3.00712 7.66657 2.80917 7.46861C2.61121 7.27066 2.5 7.00217 2.5 6.72222V3.55556ZM2.5 17.2778C2.5 16.9978 2.61121 16.7293 2.80917 16.5314C3.00712 16.3334 3.2756 16.2222 3.55556 16.2222H6.72222C7.00217 16.2222 7.27066 16.3334 7.46861 16.5314C7.66657 16.7293 7.77778 16.9978 7.77778 17.2778V20.4444C7.77778 20.7244 7.66657 20.9929 7.46861 21.1908C7.27066 21.3888 7.00217 21.5 6.72222 21.5H3.55556C3.2756 21.5 3.00712 21.3888 2.80917 21.1908C2.61121 20.9929 2.5 20.7244 2.5 20.4444V17.2778ZM16.2222 3.55556C16.2222 3.2756 16.3334 3.00712 16.5314 2.80917C16.7293 2.61121 16.9978 2.5 17.2778 2.5H20.4444C20.7244 2.5 20.9929 2.61121 21.1908 2.80917C21.3888 3.00712 21.5 3.2756 21.5 3.55556V6.72222C21.5 7.00217 21.3888 7.27066 21.1908 7.46861C20.9929 7.66657 20.7244 7.77778 20.4444 7.77778H17.2778C16.9978 7.77778 16.7293 7.66657 16.5314 7.46861C16.3334 7.27066 16.2222 7.00217 16.2222 6.72222V3.55556ZM16.2222 17.2778C16.2222 16.9978 16.3334 16.7293 16.5314 16.5314C16.7293 16.3334 16.9978 16.2222 17.2778 16.2222H20.4444C20.7244 16.2222 20.9929 16.3334 21.1908 16.5314C21.3888 16.7293 21.5 16.9978 21.5 17.2778V20.4444C21.5 20.7244 21.3888 20.9929 21.1908 21.1908C20.9929 21.3888 20.7244 21.5 20.4444 21.5H17.2778C16.9978 21.5 16.7293 21.3888 16.5314 21.1908C16.3334 20.9929 16.2222 20.7244 16.2222 20.4444V17.2778Z" fill="#909090"/>
</svg>)



function openBurgerMenu(e){
  let navigation = document.querySelector('.Sidebar_navigation__kfOlO')
  navigation.classList.toggle('showNav')
  document.querySelector('body').classList.toggle('overflowHidden')
  document.querySelector('.frameBurger').classList.toggle('frameBurgerShow')
  document.querySelector('#svgBurger').classList.toggle('rotateSvg')
  
}
  return (
    <aside className={mod.sidebar}>
      <div className={mod.title}>
        <NavLink to='../' className={mod.titleText}>George Bartev <br /><span>Product Designer</span></NavLink>
        <div onClick={(e) => openBurgerMenu(e)} className={mod.burger}>{burgerMenu}</div>
      </div>
      <nav className={mod.navigation}>
        <ul className={mod.items}>
          <NavLink id='link1' className={mod.navLink}  to='/' activeclassname='active'>
            <li className={mod.item}><p className={mod.link}> {homeIcon} <span>Home</span></p></li>
          </NavLink>
          <NavLink id='link2' to='work' className={mod.navLink} activeclassname="active">
            <li className={mod.item}><p className={mod.link}>{workIcon} <span>Work</span></p></li>
          </NavLink>
          <NavLink id='link3' to='about' className={mod.navLink} activeclassname="active">
            <li className={mod.item}><p className={mod.link}>{userIcon} <span>About</span></p></li>
          </NavLink>
          <NavLink id='link4' to='contact' className={mod.navLink} activeclassname="active">
            <li className={mod.item}><p className={mod.link}>{contactIcon} <span>Contact</span></p></li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;