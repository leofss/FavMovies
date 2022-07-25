import { useEffect, useState } from "react";
import React from 'react';
//Components
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

//Interfaces
import {IMovie} from "./Interfaces/Movie";

import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList Movie={[]}/>
      <Footer/>
    </div>
  );
}

export default App;
