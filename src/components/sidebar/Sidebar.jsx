import React from 'react'
import styles from './page.module.css'

const Sidebar = (props) => {
 return (
  <div className={styles.sidebarContainer}>
   <div className={styles.filtersortContainer}>
    <p>{props.genresSortFilter.genre}</p>
    <p>{props.genresSortFilter.sort}</p>
   </div>
   <div className={styles.genresContainer}>
    <h2 className={styles.title} onClick={props.handlegenre_modal}>
     Genres
    </h2>
    {props.genresSortFilter.genre_modal && (
     <div className={styles.genreItems}>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Action
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Biography
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Crime
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Drama
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Family
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Horror
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Thriller
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Romance
      </p>
      <p className={styles.genreItem} onClick={props.handlegenre}>
       Musical
      </p>
     </div>
    )}
   </div>
   <div className={styles.genresContainer}>
    <h2
     className={styles.title}
     onClick={() =>
      props.handlesort_modal(!props.genresSortFilter.sort_modal)
     }
    >
     Sort
    </h2>
    {props.genresSortFilter.sort_modal && (
     <div className={styles.genreItems}>
      <p
       className={styles.genreItem}
       onClick={props.handlesort}
       id='title_asc'
      >
       Title - Ascending
      </p>
      <p
       className={styles.genreItem}
       onClick={props.handlesort}
       id='title_desc'
      >
       Title - Descending
      </p>
      <p
       className={styles.genreItem}
       onClick={props.handlesort}
       id='imdb_desc'
      >
       IMDB Rating - Descending
      </p>
      <p
       className={styles.genreItem}
       onClick={props.handlesort}
       id='imdb_asc'
      >
       IMDB Rating - Asending
      </p>
     </div>
    )}
   </div>
  </div>
 )
}

export default Sidebar
