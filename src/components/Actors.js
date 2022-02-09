import React from "react";
import { actors } from "../data";

function Actors() {
  const x = actors.map(x => (
      <div key = {x.name}>
        <h1>{x.name}</h1>
        <ul>{x.movies.map(x => <li key = {x}>{x}</li>)}</ul>
      </div>
  ))
  return (
    <>
      <h1>Actors Page</h1>
      {x}
    </>
  )
}

export default Actors;
