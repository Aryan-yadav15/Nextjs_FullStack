
import React from 'react'
import styles from'./SinglePostPage.module.css'
import Image from 'next/image'

const getData = async(slug)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if(!res.ok){
    throw new Error("something wrnog with fetching ")
  }
  const data = await res.json()
  // console.log({data})
  return data
}


const SinglePostPage =async ({params}) => {

  const {slug} = params

  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src='https://images.pexels.com/photos/19787758/pexels-photo-19787758/free-photo-of-fallen-leaves-on-road-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image className={styles.avatar} 
            src='https://images.pexels.com/photos/19949053/pexels-photo-19949053/free-photo-of-a-man-walking-in-the-shadow-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Aryan Yadav</span>
          </div>
          <div className={styles.detailTitle}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>24/01/24</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage