import react, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";

function App() {
   const [gernes, setGernes] = useState([]);
   const [gerne, setGerne] = useState(null);
   const [search, setSearch] = useState(null);

   const getMovieGernes = async function () {
      const request = axios.get(
         "https://api.themoviedb.org/3/genre/movie/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US"
      );

      const response = (await request).data.genres;
      console.log(response)
      setGernes(response);
   }

   const updateCurrentMovieGerne = function(name) {
      setGerne(name);
   }

   const updateSearch = function(value) {
      console.log(value);
      setSearch(value);
   }

   useEffect(function () {
      getMovieGernes();
   }, []);
   
   return (
      <>
         <Header gernes={gernes} setSearch={updateSearch} setCurrentMovieGerne={updateCurrentMovieGerne} />
         <MoviesGrid gerne={gerne} search={search} />
      </>
   );
}

export default App;
