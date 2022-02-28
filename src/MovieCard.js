import React from 'react'
import './moviecart.css';
import StarRatings from 'react-star-ratings';
import './index.css'
function MovieCard(item) {
    return (
       
<div className="card movie_card">
		  <img src={item.movies.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		   <h5 className="card-title">{item.movies.Title}</h5>
            <p className="description">{item.movies.description}</p>
		   		
		<StarRatings 
          rating={item.movies.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
		  starDimension='22px'
        />
		  </div>
		</div>

			
    )
}

export default MovieCard
