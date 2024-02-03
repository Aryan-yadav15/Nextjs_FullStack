import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1  className={styles.title}>We create the digital ideas which are bigger,bolder and better</h1>
        <p  className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure molestias 
          exercitationem libero dolorum autem commodi amet praesentium omnis earum voluptatibus voluptatem in no
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Happy Clients</p>
          </div>
          <div className={styles.box}>
            <h1>5</h1>
            <p>Years of Experiance</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}/>
      </div>
    </div>
  )
}

export default About