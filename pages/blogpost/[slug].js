import { useRouter } from 'next/router'
import React from 'react'
import styles from "@/styles/Blog.module.css"

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query;
  return (
    <div className={styles.blogs}>
    <h1>Title of the page {slug}</h1>
    <div style={{padding: "3% 16%"}}>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus nostrum ex laborum accusamus qui dolor vero cum! Modi totam atque itaque qui ad quas aliquid aliquam obcaecati unde impedit?sit amet consectetur adipisicing elit. Nisi voluptas dolore culpa expedita ullam atque necessitatibus ad totam sit deserunt, et soluta fugit!</div>
    </div>
  )
}

export default Slug