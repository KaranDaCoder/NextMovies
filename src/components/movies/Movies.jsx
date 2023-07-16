import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { allMovies } from '@/db/movieDb'
import { filterMovies, sortFilterMovies } from '@/util/sidebar.util'
import Link from 'next/link'
import Card from '../card/Card'

const Movies = (props) => {
 const [movies, setMovies] = useState(allMovies)
 const [filteredMovies, setFilteredMovies] = useState([])


 useEffect(() => {
  console.log(props);
  const fetched = filterMovies(
   movies,
   props.category,
   props.genresSortFilter.genre,
  )

  sortFilterMovies(fetched, props.genresSortFilter.sort)
  setFilteredMovies(fetched)
 }, [props.genresSortFilter.genre, props.genresSortFilter.sort])

 return (


  <div className={styles.moviesContainer}>
   {filteredMovies.map((movie) => (
    <div key={movie.imdbID}>
     <Link href={`/movies/${props.category}/${movie.imdbID}`}>
      <Card image_src={movie.image_url} title={movie.title} imdbRating={movie.imdbRating} />
     </Link>
    </div>
   ))}
  </div>

 )
}

export default Movies
