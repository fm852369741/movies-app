import Gerne from "./Gerne";
import { useRef } from "react";

export default function Header({ setCurrentMovieGerne, gernes, setSearch }) {
   const inputRef = useRef();
   const searchRef = useRef();

   const updateStates = function () {
      inputRef.current.classList.toggle('active');
      searchRef.current.classList.toggle('active');
   }

   return (
      <div className="navigation">
         <h2>Movies</h2>
         <div className="links">
            <ul>
               <Gerne id={null} setSearch={setSearch} name={'Trending'} setMovieGerne={setCurrentMovieGerne} />
               {[...gernes].map(function (gerne, _) {
                  if (_ > 8) return 
                  return <Gerne id={gerne.id} name={gerne.name} setSearch={setSearch} setMovieGerne={setCurrentMovieGerne} key={gerne.id} />
               })}
               <div className="dropdown">
                  <span className="text">More Gernes...</span>
                  <div className="content">
                     {[...gernes].map(function (gerne, _) {
                        if (_ > 8) return <Gerne setSearch={setSearch} id={gerne.id} name={gerne.name} setMovieGerne={setCurrentMovieGerne} key={gerne.id} />
                     })}
                  </div>
               </div>
            </ul>
         </div>
         <div className="extras">
            <div className="search-bar">
               <input type="text" ref={inputRef} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
               <i className="fas fa-search search-icon" ref={searchRef} onClick={updateStates}></i>
            </div>
         </div>
      </div>
   );
}