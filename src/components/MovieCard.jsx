import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card" style={{textDecoration:'none',color:'inherit'}}>
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="desc">{movie.description}</p>
        <div className="rating">Rating: {movie.rating}/10</div>
      </div>
    </Link>
  )
}
