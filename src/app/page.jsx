import style from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
  <div className={style.container}>
    <div className={style.textcontainer}>
      <h1 className={style.title}>
        Creative Thoughts Agency
      </h1>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Incidunt adipisci ipsa fugit hic aperiam tempora
      </p>
      <div className={style.buttons}>
        <button className={style.button}>Learn More</button>
        <button className={style.button}>Contact</button>
      </div>
      <div className={style.brands}>
        <Image src="/brands.png" alt='' fill className={style.brandImage} />
      </div>
    </div>
    <div className={style.imgcontainer}>
      <Image src='/hero.gif' alt='' fill className='style.heroImage'/>
    </div>
  </div>
  
  )
};

export default Home;