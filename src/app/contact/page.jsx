import styles from './contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt='contact'
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Phone number (Optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Meassage'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact