import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/core/SideBar/SideBar'
import React, {useEffect, useState}  from 'react'
import Logo from '../assets/Images/logo.png'
import pic1 from '../assets/Images/pic1.jpg'
import pic2 from '../assets/Images/pic2.jpg'
import pic3 from '../assets/Images/pic3.jpg'
import pic4 from '../assets/Images/pic4.jpg'
import pic5 from '../assets/Images/pic5.jpg'
import pic6 from '../assets/Images/pic6.jpg'
import pfp1 from '../assets/Images/pfp1.jpg'
import pfp2 from '../assets/Images/pfp2.jpg'
import pfp3 from '../assets/Images/pfp3.jpg'
import pfp4 from '../assets/Images/pfp4.jpg'
import pfp5 from '../assets/Images/pfp5.jpg'
import pfp6 from '../assets/Images/pfp6.jpg'

import VideoThumbNail from '../components/core/VideoThumbNail/VideoThumbNail'

export default function Home() {

  const pics = [pic1,pic2, pic3, pic4, pic5, pic6]
  const pfps = [pfp1,pfp2, pfp3, pfp4, pfp5, pfp6]

  const [thumbNail, setThumbNail ] = useState(pics[Math.floor(Math.random() * pics.length)])
  const [pfp, setPfp ] = useState(pfps[Math.floor(Math.random() * pfps.length)])

  return (
    <div className={styles.bg}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.blockTubeTitle}>
          <Image src={Logo} width={50} height={45}/>
          <span>BlockTube</span>
        </div>
        <div className={styles.mainCard}></div>
        <div>
          <div className={styles.videoRow}>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
          </div>
          <div className={styles.videoRow}>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
          </div>
          <div className={styles.videoRow}>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
            <VideoThumbNail src = {thumbNail} channel="Pandey Ji Ka beta" title = "Chumma chipak ke leta" profilePicture = {pfp}/>
          </div>
        </div>
      </div>
    </div>
  )
}
