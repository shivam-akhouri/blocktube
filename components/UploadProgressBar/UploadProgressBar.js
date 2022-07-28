import React from 'react'
import styles from './UploadProgressBar.module.css'

const UploadProgressBar = () => {
  return (
    <div className={styles.progressBar}>
        <div className={[styles.circle, styles.active].join(" ")}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>

    </div>
  )
}

export default UploadProgressBar