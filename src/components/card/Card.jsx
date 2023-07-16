import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
//https://m.media-amazon.com/images/M/MV5BMTgwNTAwMjEzMF5BMl5BanBnXkFtZTcwNzMzODY4OA@@._V1_SX300.jpg
const Card = (props) => {
 return (
  <div className={styles.cardContainer}>
   <div className={styles.images}>
    <Image src={props.image_src} alt="" width={220} height={250} className={styles.image} priority={true} />
   </div>
   <div className={styles.cardContent}>
    <p className={styles.title}>{props.title}</p>
   </div>
  </div>
 )
}

export default Card