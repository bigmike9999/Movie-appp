import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="desc">{movie.description}</p>
        <div className="rating">Rating: {movie.rating}/10</div>
      </div>
    </div>
  )
}
