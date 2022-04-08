import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddGame from '../components/AddGame'

const Home = () => {
  const [games, setgames] = useState()
  const [text, settext] = useState('')
  useEffect(async () => {
    await axios
      .get('http://localhost:5000/game')
      .then((res) => setgames(res.data.games))
  }, [])

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/game/${id}`)
      .then((res) => alert(res.data))
  }
  return (
    <div className='home'>
      <h1>THi is home compoenent</h1>
      <AddGame />
      <input
        type='text'
        placeholder='search for game'
        onChange={(e) => settext(e.target.value)}
      />
      {games &&
        games
          .filter((el) => el?.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <div className='card'>
              <img src={el.image} alt='' />
              <h2>{el.name}</h2>
              <p>{el.description}</p>
              <button
                onClick={() => {
                  handleDelete(el._id)
                  window.location.reload()
                }}
              >
                delete
              </button>
            </div>
          ))}
    </div>
  )
}

export default Home
