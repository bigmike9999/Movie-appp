import React, { useState, useMemo } from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import './index.css'

const initialMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZjQ5LWFmNTEtODM1ZmRlZjYxZTVlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg',
    rating: 9
  },
  {
    id: 2,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing...',
    posterURL: 'https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg',
    rating: 8
  },
  {
    id: 3,
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery...',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk3NzYzN15BMl5BanBnXkFtZTgwMjk2ODYyMjE@._V1_.jpg',
    rating: 8
  }
]

export default function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posterURL, setPosterURL] = useState('')
  const [rating, setRating] = useState(1)
  const [filter, setFilter] = useState({ title: '', rating: 0 })

  const addMovie = (e) => {
    e.preventDefault()
    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim() || 'https://via.placeholder.com/150x225?text=No+Image',
      rating: Number(rating)
    }
    if (!newMovie.title) return
    setMovies(prev => [newMovie, ...prev])
    setTitle('')
    setDescription('')
    setPosterURL('')
    setRating(1)
  }

  const filteredMovies = useMemo(() => {
    return movies.filter(m => {
      const matchesTitle = m.title.toLowerCase().includes(filter.title.toLowerCase())
      const matchesRating = m.rating >= (filter.rating || 0)
      return matchesTitle && matchesRating
    })
  }, [movies, filter])

  return (
    <div className="app">
      <header>
        <h1>My Movies & TV Shows</h1>
      </header>

      <section className="controls">
        <form className="add-form" onSubmit={addMovie}>
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <input placeholder="Poster URL" value={posterURL} onChange={e => setPosterURL(e.target.value)} />
          <input placeholder="Short description" value={description} onChange={e => setDescription(e.target.value)} />
          <input type="number" min="0" max="10" value={rating} onChange={e => setRating(e.target.value)} />
          <button type="submit">Add Movie</button>
        </form>

        <Filter onChange={setFilter} />
      </section>

      <main>
        <MovieList movies={filteredMovies} />
      </main>
    </div>
  )
}
