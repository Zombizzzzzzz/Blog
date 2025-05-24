import React from 'react'
import styles from './pagination.module.css'

const Paginaton = () => {
  return (
    <div className={styles.container}>
      <button className={styles.Button}>Prev </button>
      <button className={styles.Button}>Next </button>
    </div>
  )
}

export default Paginaton