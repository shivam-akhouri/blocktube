import React from 'react'
import styles from './UploadProgressBar.module.css'

const UploadProgressBar = () => {
  return (
    <>
    <div className={styles.bar}>

    <div className={styles.progressBar}>
      <div className={styles.progressElements}>
        <p className={styles.head1}>Upload Video</p>
        <div className={[styles.circle, styles.completed].join(" ")}></div>
        </div>

        <div className={styles.progressElements}>
          <p className={[styles.activeText, styles.head2].join(" ")}>Details</p>
          <div className={[styles.circle, styles.active].join(" ")}></div>
        </div>
        
        <div className={styles.progressElements}>
          <p className={styles.head3}>Thumbnail</p>  
          <div className={styles.circle}></div>
        </div>

        <div className={styles.progressElements}>
          <p className={styles.head4}>Preview</p>
          <div className={styles.circle}></div>
        </div>
        
    </div>
    </div>
    </>
  )
}

export default UploadProgressBar