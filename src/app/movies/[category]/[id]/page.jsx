import React from 'react';
import { allMovies } from '@/db/movieDb';



const fetchMovie = async (id) => {
 return allMovies.find(movie => movie.imdbID === id);
}

const Movie = async ({ params }) => {
 const movie = await fetchMovie(params.id);
 return (

  <div>
   <p>Single Movie : {params?.id}</p>
   <p>Movie Title : {movie?.title}</p>
   <p>{movie.plot}</p>



  </div>
 )
}

export default Movie