import React from "react";
import { movies } from "../data";

function Movies() {
  const x = movies.map((x)=> (
      <div key={x.title}>
        <h2>{x.title}</h2>
        <p>{x.time}</p>
        <ul>{x.genres.map(x => (<li key = {x}>{x}</li>))}</ul>
      </div>
  ))
  return (
    <>
      <h1>Movies Page</h1>
      {x}
    </>
  )
}

export default Movies;
