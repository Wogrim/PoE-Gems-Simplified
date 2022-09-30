import React from 'react';
import styles from './NavBar.module.css';

const NavBar = (props) => {

  return (
    <div className={styles.NavBar}>
        <button className={props.currentView==="R"?styles.active:""} onClick={()=>props.setCurrentView("R")}>Restrictions</button>
        <button className={props.currentView==="A"?styles.active:""} onClick={()=>props.setCurrentView("A")}>Active Gem</button>
        <button className={props.currentView==="S"?styles.active:""} onClick={()=>props.setCurrentView("S")}>Support Gems</button>
    </div>
  )
}

export default NavBar
