import React from "react";
import { movies } from "../data";

function Movies() {
  const movies = [
    {
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"],
    },
    {
      title: "Trolls",
      time: 92,
      genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
    },
    {
      title: "Jack Reacher: Never Go Back",
      time: 118,
      genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"],
    },
  ]
   return (
    <div>
      {movies.map((movie) => (
        <div key={movie.title}>
          <p>Title:{movie.title}</p>
          <p>Time:{movie.time}</p>
          <ul>
            {movies.genres.map((genre) => 
            <li key={genre}>{genre}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
   )

   }

export default Movies;
