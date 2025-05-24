import Link from 'next/link'
import styles from './comments.module.css'

const Comments = () => {
  const status = "authorised"
    return (
   <div className={styles.container}>
       <h1 className={styles.header}>Comments</h1> 
      {status === "authorised" ? (
        <div className={styles.write}>
           <textarea className={styles.textarea} placeholder="Write a comment..."/>
           <button className={styles.button}>Send</button>
            </div>
            
        ) : (
        <Link href="/login" className={styles.login}>
          Login to write a comment</Link>  )  
        }
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <div className={styles.userImageCont}>
                        <img src="/p1.jpeg" alt="" className={styles.userImage} height={50} width={50} />
                    </div>
                    <div className={styles.userinfo}>
                        <span className={styles.username}>Siddhant </span>
                        <span className={styles.date}>1.1.2008 </span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>

                <div className={styles.comment}>
                <div className={styles.user}>
                    <div className={styles.userImageCont}>
                        <img src="/p1.jpeg" alt="" className={styles.userImage} height={50} width={50} />
                    </div>
                    <div className={styles.userinfo}>
                        <span className={styles.username}>Siddhant </span>
                        <span className={styles.date}>1.1.2008 </span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div><div className={styles.comment}>
                <div className={styles.user}>
                    <div className={styles.userImageCont}>
                        <img src="/p1.jpeg" alt="" className={styles.userImage} height={50} width={50} />
                    </div>
                    <div className={styles.userinfo}>
                        <span className={styles.username}>Siddhant </span>
                        <span className={styles.date}>1.1.2008 </span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div><div className={styles.comment}>
                <div className={styles.user}>
                    <div className={styles.userImageCont}>
                        <img src="/p1.jpeg" alt="" className={styles.userImage} height={50} width={50} />
                    </div>
                    <div className={styles.userinfo}>
                        <span className={styles.username}>Siddhant </span>
                        <span className={styles.date}>1.1.2008 </span>
                    </div>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                </div>
                </div>
                
    </div>
  )
}

export default Comments