import React from "react";
import { directors } from "../data";

function Directors() {
  const x = directors.map(x => (
      <div key = {x.name}>
        <h2>{x.name}</h2>
        <ul>{x.movies.map(x => (
          <li key = {x}>{x}</li>))}</ul>
      </div>
  ))
  return (
    <>
      <h1>Directors Page</h1>
      {x}
    </>
  )
}

export default Directors;
