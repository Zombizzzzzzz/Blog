import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>
        Hi, 
         <b> I am Siddhant!</b> 
       </h1>
      <h1 className={styles.title}> Welcome to my blog.</h1>

       <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
         </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> Text tile</h1>
          <p className={styles.postDesc}>
            Text description
          </p>
              <button className={styles.button}>Read More</button>
          </div>    


       </div>

    </div>
  )
}

export default Featured