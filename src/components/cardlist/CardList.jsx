import React from 'react'
import styles from './cardlist.module.css'
import Image from 'next/image'
import { Card } from '../card/card'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

      </div>
 </div>
    </div>
  )
}

export default CardList