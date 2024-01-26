import React, { useState } from "react";
import Iron from "../../assets/movie-covers/iron-man.png";
import Card from "./card";
import { getAllMovies } from "../data/movies";

const MuviList = () => {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MuviList;
