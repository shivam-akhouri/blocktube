import React from 'react'
import styles from './VideoThumbNail.module.css'
import Image from 'next/image'


const VideoThumbNail = (props) => {
  return (
    <div className={styles.ThumbNail}>
        <Image src = {props.src} width = {270} height = {150}/>
        <div className = {styles.titleInfo}>
            <p>{props.title}</p>
            <div className={styles.channelInfo}>
                <div className = {styles.pfp}>
                <Image src =  {props.profilePicture} width = {25} height = {25}/>
                </div>
                <p>{props.channel}</p>
            </div>
        </div>
    
    </div>
  )
}

export default VideoThumbNail