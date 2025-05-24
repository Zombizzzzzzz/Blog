import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.Image}/>
      </div>
                
      <div className={styles.txtContainer}>
          <div className={styles.details}>
            <span className={styles.date}>22.12.2004 -</span>
            <span className={styles.category}>Culture</span>
              
          </div>
          <Link href="/">
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatibus, quos, voluptates, voluptatibus, quos, voluptates,
                voluptatibus, quos, voluptates.
                </p>
                <Link href="/">Read More...</Link>
      </div>
    </div>
  );
};
