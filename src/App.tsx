import { useEffect, useState } from "react";
import React from 'react';
//Components
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

//Interfaces
import {IMovie} from "./Interfaces/Movie"

function App() {
  const [movies, setMovies] = useState<IMovie[]>([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/movie')
    .then(response => response.json())
    .then(data => {setMovies(data)})
  }, [])
  return (
    <div className="App">
      <Header/>
      {movies.map(mov =>{
        return(
          <li key={mov.title}>
            <h1>{mov.title}</h1>
            <h2>{mov.rating}</h2>
            <p>{mov.director}</p>
            <p>{mov.desc}</p>
            <p>{mov.stars}</p>
            <p>{mov.poster}</p>
          </li>
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
