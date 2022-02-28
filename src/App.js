import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import Search from './Search';



const App = () => {
    const [keyword, setKeyword] = useState("")
    const [newRate, setNewRate] = useState(1)
    const [movies, setMovies] = useState([{
        id:1,
        Title: " Masha et Michka",
        description: "Le dessin animé Masha et Michka connait un réel succès planétaire.",
        Poster: "https://p1.storage.canalblog.com/19/73/1667353/124707564_o.jpg ",
        rating: 5,
        trailer:'https://www.youtube.com/watch?v=byfGBFw5yXk&t=1582s'
    },
    {
        id:2,
        Title: " Tom and Jerry",
        description: "La série, centrée sur les deux principaux protagonistes Tom et Jerry .",
        Poster: "https://imgsrc.cineserie.com/2017/05/1811979.jpg?ver=1",
        rating: 4,
        trailer:'https://www.youtube.com/watch?v=WGtBtV7GkUA'
    },
    {
        id:3,
        Title: "Scooby Doo",
        description: "Scooby est une franchise américaine comprenant de nombreuses séries.",
        Poster: "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoU30KoTfDSiTEuA0a4BZ5sd_bs1aYSA2pwZxgBCh8IARIbChRrDF_PN9w85wTjsMEod-l8cyZy-RIDcG5n/jpg",
        rating: 3,
        trailer:'https://www.youtube.com/watch?v=1TEaxhn79Jc'
    },

    {
        id:4,
        Title: " Pikachu",
        description: "Pikachu est imaginé par Atsuko Nishida de Game Freak . ",
        Poster: "https://www.geekqc.ca/wp-content/uploads/2016/07/025Pikachu_OS_anime_10.png",
        rating: 4,
        trailer:'https://www.youtube.com/watch?v=pAOeW9JixYQ'

    }]);
    const addMovie = (kd) => {
        console.log(kd)
        setMovies(movies.concat(kd))
        console.log(movies)

    }
    const searchh = (text) => {
        setKeyword(text)
    }
    const setRate = (nbEtoile) => {
        setNewRate(nbEtoile)

    }


    return (
        <div className='App'>
            <div>
                <Search searchh={searchh} setRate={setRate} newRate={newRate} />
            </div>
            <div className='movieList'>
                <MovieList addMovie={addMovie} movies={movies.filter((el) =>
                    el.rating >= newRate && el.Title.toLowerCase().includes(keyword.toLowerCase().trim()))} />
            </div>


        </div>
    );
};

export default App;