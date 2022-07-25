import {IMovie} from "../Interfaces/Movie";
import { useEffect, useState } from "react";
import React from 'react';

//Styles
import styles from "./MovieList.module.css";


interface Props{
    Movie : IMovie[];
}

const MovieList = ({Movie} : Props) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(()=>{
    fetch('http://localhost:3000/api/movie')
    .then(response => response.json())
    .then(data => {setMovies(data)})
    }, [])
    return(
    <>
      {movies.map(mov =>{
        const ShowSt =  mov.stars.join(", ")
        return(
          <div className={styles.section}>
            <ul className={styles.movie}>
              <li key={mov.title}><img src={mov.poster} alt="Poster do filme"/></li>
              <li><p>{mov.title}</p></li>
              <li><p>Rating: {mov.rating}</p></li>
              <li className={styles.desc}><p>Descrição: {mov.desc}</p></li>
              <li><p>Diretor: {mov.director}</p></li>
              <li><p>Atores: {ShowSt}</p></li>
            </ul>
          </div>
        )
       })}
    </>
    );
};

export default MovieList