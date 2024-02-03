import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { revalidateTag } from 'next/cache'

const getData = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next: {revalidate:3600}})
  if(!res.ok){
    throw new Error("something wrnog with fetching ")
  }
  const data = await res.json()
  // console.log({data})
  return data
}

const posts = await getData()


const Blog = async () => {
  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
        <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default Blog