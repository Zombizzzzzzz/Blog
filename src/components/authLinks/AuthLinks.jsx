"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

export const AuthLinks = () => {
  const {status} = useSession(); 
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {status === 'unauthenticated' ? (
          <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span>Logout</span>
          </>
        )}
      </div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.ResponsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === 'unauthenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}
