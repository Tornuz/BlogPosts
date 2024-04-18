import React from 'react'
import styles from "@/styles/Blog.module.css"
import Link from 'next/link'


const Blog = () => {
  return (
    <div className={styles.blogs}>
      <h2>Popular Blogs</h2>
        <div className="blogItem">
        <Link href="/blogpost/learn-JS">
          <h3>How to learn JavaScript in 2022</h3></Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2023</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2024</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn JavaScript in 2025</h3>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </div>
  )
}

export default Blog