import React, { useState, useEffect } from 'react'

export default function Filter({ onChange }) {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)

  useEffect(() => {
    onChange({ title, rating: Number(rating) })
  }, [title, rating, onChange])

  return (
    <div className="filter">
      <input placeholder="Filter by title" value={title} onChange={e => setTitle(e.target.value)} />
      <select value={rating} onChange={e => setRating(e.target.value)}>
        <option value={0}>All ratings</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5+</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
        <option value={9}>9+</option>
      </select>
    </div>
  )
}
