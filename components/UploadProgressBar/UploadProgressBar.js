import React from 'react'
import styles from './UploadProgressBar.module.css'

const UploadProgressBar = () => {
  return (
    <>
    <div className={styles.bar}>

      <div className={styles.barText}>
        <span >Upload Video</span>
        <span className={styles.activeText}>Details</span>
        <span>Thumbnail</span>  
        <span>Preview</span>
      </div>
    <div className={styles.progressBar}>
      <div className={styles.progressElements}>
        <div className={[styles.circle, styles.completed].join(" ")}></div>
        </div>

        <div className={styles.progressElements}>
        <div className={[styles.circle, styles.active].join(" ")}></div>
        </div>
        
        <div className={styles.progressElements}>
        <div className={styles.circle}></div>
        </div>

        <div className={styles.progressElements}>
        <div className={styles.circle}></div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default UploadProgressBar