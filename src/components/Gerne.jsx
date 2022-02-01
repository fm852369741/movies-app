import React from "react";

export default function Gerne({name, id, setMovieGerne, setSearch}) {
   const updateGerne = function () {
      setSearch(null);
      setMovieGerne(id);
   }

   return (
      <li onClick={updateGerne}>{name}</li>
   );
}