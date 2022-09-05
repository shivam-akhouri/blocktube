import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
import Home from './home.png'
import Search from './search.png'
import History from './history.png'



const SideBar = () => {

  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
    console.log(showNav);
  }


  // const [showNav, setShowNav] = useState(false);

  // function toggleNav() {
  //   setShowNav(!showNav);
  // }


  return (
    <div className={[styles.sidebar, showNav ?  styles.sidebarActive : null].join(" ")}>
      <div id={styles.navMenu} className={ showNav ?  styles.active : null} onClick={() => toggleNav()}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.sideBarElement}>
        <Image src={Home} width={28} height={28} className={styles.image}/>
        <p className={showNav ?  styles.activeText : styles.inactiveText}>Home</p>
      </div>
      <div className={styles.sideBarElement}>
        <Image src={Search} width={28} height={28} className={styles.image}/>
        <span className={showNav ?  styles.activeText : styles.inactiveText}>Search</span>
      </div>
      <div className={styles.sideBarElement}>
        <Image src={History} width={28} height={28} className={styles.image}/>
        <span className={showNav ?  styles.activeText : styles.inactiveText}>History</span>
      </div>
    </div>
  )
}

export default SideBar