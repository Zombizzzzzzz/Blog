import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
const Category = () => {
  return <div className={styles.container}>
     
   <h1 className={styles.title}> Categories</h1>
   <div className={styles.categories}>
  
      <Link href="/" className={`${styles.category} ${styles.travel}`}>
      <Image src="/style.png" alt="" height={40} width={40} className={styles.image}/>
      Travel
      </Link>
     <Link href="/" className={`${styles.category} ${styles.coding}`}>
      <Image src="/style.png" alt="" height={40} width={40} className={styles.image}/>
      Coding
      </Link>
      <Link href="/" className={`${styles.category} ${styles.games}`}>
      <Image src="/style.png" alt="" height={40} width={40} className={styles.image}/>
      Games
      </Link>
      <Link href="/" className={`${styles.category} ${styles.others}`}>
      <Image src="/style.png" alt="" height={40} width={40} className={styles.image}/>
      Others
      </Link>
   </div>

  </div>;
};

export default Category;
