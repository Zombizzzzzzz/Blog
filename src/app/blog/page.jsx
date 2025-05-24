import React from 'react'
import styles from './Categorypage.module.css'
import Navbar from '@/components/Navbar/Navbar'
import CardList from '@/components/cardlist/CardList'

const CategoryPage = () => {
  return (
    <div className={styles.container}>

     <h1 className={styles.header}>
        Travel
     </h1>

     <div className={styles.content}>
      <CardList/>
     </div>

          


    </div>
  )
}

export default CategoryPage