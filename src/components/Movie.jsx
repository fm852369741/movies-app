import React, { useEffect, useState } from 'react';

export default function Movie({movie}) {
   const [voteStatus, setVoteStatus] = useState(null);

   useEffect(function () {
      if (movie.vote_average >= 8) setVoteStatus('green');
      else if (movie.vote_average <= 4) setVoteStatus('red');
      else setVoteStatus('yellow');
   }, [])

   return (
      <>
         {!movie.adult && <div className='movie'>
            <div className='poster'>
               <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} />
            </div>
            <div className='overview'>
               <p>Overview</p>
               {movie.overview}
            </div>
            <div className='footer'>
               <div className='title'>{movie.original_title}</div>
               <div className={`popularity ${voteStatus}`}>{movie.vote_average}</div>
            </div>
         </div>}
      </>
   );
}