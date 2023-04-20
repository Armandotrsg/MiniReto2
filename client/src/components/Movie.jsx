import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      {!movies ? <p>Loading...</p> : movies.map((movie, index) => {
        return (
          <>
            <h1 key={index}>Nombre: {movie.title}</h1>
          </>
        );
      })}
    </>
  );
}

export default Movie;