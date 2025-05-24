import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Links from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1>Siddhant</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatibus.
          </p>{" "}
        </div>

        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={25} height={22} />
          <Image src="/instagram.png" alt="Twitter" width={25} height={22} />
          <Image src="/tiktok.png" alt="Instagram" width={25} height={22} />
          <Image src="/youtube.png" alt="LinkedIn" width={25} height={22} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitles}>Nav</span>
          <Links href="/">Home</Links>
          <Links href="/">About</Links>
          <Links href="/">Contact</Links>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitles}>Socials</span>
          <Links href="/">Facebook</Links>
          <Links href="/">Instagram</Links>
          <Links href="/">Tiktok</Links>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitles}>Blogs</span>
          <Links href="/">Travel</Links>
          <Links href="/">Coding</Links>
          <Links href="/">Games</Links>
        </div>
      </div>
    </div>
  );
};

export default Footer;
