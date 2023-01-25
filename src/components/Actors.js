import React from "react";
import { actors } from "../data";

function Actors() {
  const actors = [
    {
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
    },
    {
      name: "Justin Timberlake",
      movies: ["Trolls", "Friends with Benefits", "The Social Network"],
    },
    {
      name: "Anna Kendrick",
      movies: ["Pitch Perfect", "Into The Wood"],
    },
    {
      name: "Tom Cruise",
      movies: [
        "Jack Reacher: Never Go Back",
        "Mission Impossible 4",
        "War of the Worlds",
      ],
    },
  ];
  return (
    <div>
      <h1>Actors page</h1>
      <div>
        {actors.map((actor) => (
          <div key={actor.name}> 
            <p>Name:{actor.name}</p>
            {actor.movies.map((movie) => (
              <li  key={movie}>{movie}</li>
            ))}
          </div>
           

        ))}
      </div>
    </div>
  )
}

export default Actors;
