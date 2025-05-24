import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import { AuthLinks } from '../authLinks/AuthLinks'
import { ThemeToggle } from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.social}>
        <Image src="/facebook.png"  alt="Facebook" width={25} height={24}/>
        <Image src="/instagram.png"  alt="Twitter" width={25} height={24}/>
        <Image src="/tiktok.png"  alt="Instagram" width={25} height={24} />
        <Image src="/youtube.png"  alt="LinkedIn" width={25} height={24} />
        
         </div>
      
      <div className={styles.logo}>Siddhant Dahal</div>
       <div className={styles.links}>
        <ThemeToggle />
        <div  href = '/' className={styles.link}>Home</div>
        <div  href = '/' className={styles.link}>About</div>
        <div  href = '/' className={styles.link}>Contact</div>
       <AuthLinks />
       </div>
      


    </div>
  )
}

export default Navbar