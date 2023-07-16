'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import Sidebar from '@/components/sidebar/Sidebar'
import Movies from '@/components/movies/Movies'

const SidebarCategory = ({ params }) => {
 const [genresSortFilter, setGenresSortFilter] = useState({
  sort: 'title_asc',
  genre: 'All',
  genre_modal: false,
  sort_modal: false
 })

 const handleGenres = (e) => {
  setGenresSortFilter({ ...genresSortFilter, genre: e.target.innerText, genre_modal: false })
 }

 const handleSortFilter = (e) => {
  setGenresSortFilter({ ...genresSortFilter, sort: e.target.id, sort_modal: false })
 }

 const handleGenreModal = (genre_current) => {
  setGenresSortFilter({ ...genresSortFilter, genre_modal: !genre_current })
 }
 const handleSortModal = (sort_current) => {
  setGenresSortFilter({ ...genresSortFilter, sort_modal: !sort_current })
 }


 return (
  <div className={styles.sidebarMoviesContainer}>
   <Sidebar
    {...params}
    handlegenre={(e) => handleGenres(e)}
    handlesort={(e) => handleSortFilter(e)}
    handlegenre_modal={() => handleGenreModal(genresSortFilter.genre_modal)}
    handlesort_modal={() => handleSortModal(genresSortFilter.sort_modal)}
    genresSortFilter={genresSortFilter}
   />
   <Movies {...params} genresSortFilter={genresSortFilter} />
  </div>
 )
}

export default SidebarCategory
