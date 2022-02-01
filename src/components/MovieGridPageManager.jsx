import react, { useState, useEffect } from "react";

export default function MovieGridPageManager({page, setPage}) {

   return (
      <div className="pageManager">
         <div className="bar">
            {page > 1 && <button onClick={() => setPage(page - 1)} className="previous">{page - 1}</button>}
            <button className="current">{page}</button>
            <button className="next" onClick={() => setPage(page + 1)}>{page + 1}</button>
         </div>
      </div>
   );
}