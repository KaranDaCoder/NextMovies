export const filterMovies = (arr, category, genreSelected) => {

 !arr && 'No movies found'
 let spiltcat = splitMovieWithCategory(category)

 const filteredMovies = arr.filter((movie) =>
  (genreSelected === 'All')
   ? movie.language.includes(spiltcat)
   : movie.language.includes(spiltcat) &&
   movie.genres.includes(genreSelected)
 )

 return filteredMovies
}

export const sortFilterMovies = (arr, sortFilter) => {

 arr.sort((a, b) => {
  if (sortFilter === "title_asc") {
   if (a.title < b.title) {
    return -1;
   }
   if (a.title > b.title) {
    return 1;
   }
   return 0;
  }
  if (sortFilter === "title_desc") {
   if (a.title < b.title) {
    return 1;
   }
   if (a.title > b.title) {
    return -1;
   }
   return 0;
  }
  if (sortFilter === "imdb_asc") {
   if (a.imdbRating < b.imdbRating) {
    return -1;
   }
   if (a.imdbRating > b.imdbRating) {
    return 1;
   }
   return 0;
  }
  if (sortFilter === "imdb_desc") {
   if (a.imdbRating < b.imdbRating) {
    return 1;
   }
   if (a.imdbRating > b.imdbRating) {
    return -1;
   }
   return 0;
  }
 })
 return arr;
}

const splitMovieWithCategory = (category) => {
 !category && 'Invalid URL'

 category === 'All' && null;

 let splitCat = category.split('-')[0]
 return splitCat.charAt(0).toUpperCase() + splitCat.slice(1)
}

