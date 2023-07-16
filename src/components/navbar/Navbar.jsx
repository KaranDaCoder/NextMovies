import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';

const Navbar = () => {
 return (
  <div className={styles.navbarContainer}>
   <div className={styles.title}>
    <Link href="/" className={styles.linkItem}> <h2 className={styles.title}>Movie Manager.</h2></Link>
   </div>
   <div className={styles.linkItems}>
    <Link href="/movies/hindi-language-movies" className={styles.linkItem}>hindi</Link>
    <Link href="/movies/telugu-language-movies" className={styles.linkItem}>telugu</Link>
    <Link href="/movies/malayalam-language-movies" className={styles.linkItem}>malayalam</Link>
    <Link href="/movies/kannada-language-movies" className={styles.linkItem}>kannada</Link>
    <Link href="/movies/marathi-language-movies" className={styles.linkItem}>marathi</Link>
    <Link href="/movies/tamil-language-movies" className={styles.linkItem}>tamil</Link>
   </div>
  </div>
 )
}

export default Navbar