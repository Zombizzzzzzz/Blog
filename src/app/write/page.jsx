"use client"

import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'

import dynamic from 'next/dynamic'; 
import 'react-quill-new/dist/quill.bubble.css'; // <-- add this line
// import 'react-quill-new/dist/quill.snow.css'; 


const ReactQuill = dynamic(
  () => import('react-quill-new'),
  { ssr: false }
);


const Write = () => {
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input} />
        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" className={styles.icon} width={16} height={16}/>
          </button>
          {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
            <Image src="/image.png" alt="" className={styles.icon} width={16} height={16}/>
          </button>
          <button className={styles.addButton}c>
            <Image src="/external.png" alt="" className={styles.icon} width={16} height={16}/>
          </button>
          <button className={styles.addButton}>
            <Image src="/video.png" alt="" className={styles.icon} width={16} height={16}/>
          </button>
          </div>  
          )}
        
        <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Write Your Thoughts...'/>
        </div>
     <button className={styles.publish}>Publish</button>

    </div>
  )
}

export default Write