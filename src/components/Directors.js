import React from "react";
import { directors } from "../data";

function Directors() {
  const directors = [
    {
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
    },
    {
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
    },
    {
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamon", "The Siege"],
    },
  ];
  return (
    <div>
      <h1>Directors page</h1>
      <div>
        {directors.map((director) => (
          <div key={director.name}>
            <p>Name:{director.name}</p>
            <ul>
              {director.movies.map((movie)=> (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Directors;
