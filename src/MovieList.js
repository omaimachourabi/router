import React, { useState } from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import './add.css';
import {Link} from 'react-router-dom'



const MovieList = ({ movies, addMovie }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			
			<button className='btnadd' onClick={handleShow}>add</button>
			<Add addMovie={addMovie} show={show} handleClose={handleClose} />
			{movies.map((movie) => (
        <div className="image-container">
          <Link to={`/Description/${movie.title}`}>
          <MovieCard movies={movie}/>
          </Link>
        </div>
      ))}
		</>
	);
};

export default MovieList;