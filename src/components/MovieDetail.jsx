import React from 'react'
import { useParams, Link } from 'react-router-dom'

function toEmbedUrl(url) {
  if (!url) return ''
  // if it's already an embed URL, return
  if (url.includes('youtube.com/embed')) return url
  // convert watch?v= links to embed
  const match = url.match(/v=([a-zA-Z0-9_-]+)/)
  if (match) return `https://www.youtube.com/embed/${match[1]}`
  // short youtu.be links
  const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (short) return `https://www.youtube.com/embed/${short[1]}`
  return url
}

export default function MovieDetail({ movies }) {
  const { id } = useParams()
  const movie = movies.find(m => String(m.id) === String(id))

  if (!movie) return (
    <div style={{padding:20}}>
      <p>Movie not found.</p>
      <Link to="/">Back to home</Link>
    </div>
  )

  const embed = toEmbedUrl(movie.trailerURL)

  return (
    <div className="movie-detail" style={{maxWidth:900, margin:'20px auto', padding:16}}>
      <Link to="/">← Back</Link>
      <h2>{movie.title}</h2>
      <div style={{display:'flex',gap:16,alignItems:'flex-start',flexWrap:'wrap'}}>
        <img src={movie.posterURL} alt={movie.title} style={{width:220,borderRadius:8}} />
        <div style={{flex:1}}>
          <p>{movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}/10</p>
          {embed ? (
            <div style={{marginTop:12}}>
              <div style={{position:'relative',paddingTop:'56.25%'}}>
                <iframe
                  title={`${movie.title} trailer`}
                  src={embed}
                  style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  )
}
