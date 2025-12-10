import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) return <div className="empty">No movies found.</div>

  return (
    <div className="movie-list">
      {movies.map(m => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}
