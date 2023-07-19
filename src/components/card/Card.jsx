import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
//https://m.media-amazon.com/images/M/MV5BMTgwNTAwMjEzMF5BMl5BanBnXkFtZTcwNzMzODY4OA@@._V1_SX300.jpg
const Card = (props) => {
 return (
  <div className={styles.cardContainer}>
   <div className={styles.images}>
    <Image src={props.image_src} alt="" width={190} height={320} className={styles.image} quality={100} />
    <p className={styles.title}>{props.title}</p>
   </div>
  </div>
 )
}

export default Card