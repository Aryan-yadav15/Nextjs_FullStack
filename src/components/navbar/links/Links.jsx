'use client'

import React, { useState } from 'react'
import styles from './Links.module.css'
import NavLinks from './navLink/NavLink'
import Image from 'next/image'


const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    }

]



const Links = () => {
    const [open,setOpen] = useState(false)
     //  TEMP    
    const userSession = true
    const adminSession = true
   
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link) => (
            <NavLinks item={link} key={link.title} />
            ))}
            
            {userSession ? (
            <>
                {adminSession && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
                <button className={styles.logout}>Logout</button>
            </>
            ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
            )}
        </div>

        <Image 
            className={styles.menuButton}
            src='/menu.png'
            alt='' 
            width={30}
            height={30} 
            onClick={()=>setOpen((prev)=>!prev)}
        />
        {
           open && <div className={styles.mobileLinks}>
                {links.map((link)=>(
                    <NavLinks item={link} key={link.title} />
                ))}
           </div> 
        }
    </div>

  )
}

export default Links