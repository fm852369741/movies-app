import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import MovieGridPageManager from "./MovieGridPageManager";

export default function MoviesGrid({ gerne, search }) {
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1);

   const updateMovies = async function () {
      const request = axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}${gerne != null ? `&with_genres=${gerne}` : ''}`);
      const response = (await request).data.results;

      setMovies(response);
   }

   const searchMovies = async function () {
      const request = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c${search != null ? `&query=${search}` : ''}`);
      const response = (await request).data.results;

      setMovies(response);
   }

   useEffect(function () {
      updateMovies();
   }, [page]);

   useEffect(function () {
      updateMovies();
   }, [gerne]);

   useEffect(function () {
      searchMovies();
   }, [search]);

   return (
      <div className="movies-container">
         {console.log(gerne)}
         <MovieGridPageManager page={page} setPage={setPage} />
         <div className="movies">
            {[...movies].map(function (movie) {
               return <Movie key={movie.id} movie={movie} />
            })}
         </div>
         <MovieGridPageManager page={page} setPage={setPage} />
      </div>
   );
}