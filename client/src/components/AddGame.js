import axios from 'axios'
import React, { useState } from 'react'

const AddGame = () => {
  const [show, setshow] = useState(false)
  const [game, setgame] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  })

  const handleAdd = async (game) => {
    try {
      let result = axios
        .post('http://localhost:5000/game/', game)
        .then((res) => window.location.reload())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={() => setshow(!show)}>Add new game</button>
      {show ? (
        <div className='modal'>
          <button onClick={() => setshow(!show)}>close</button>
          <input
            type='text'
            placeholder='name'
            onChange={(e) => setgame({ ...game, name: e.target.value })}
          />
          <input
            type='text'
            placeholder='image'
            onChange={(e) => setgame({ ...game, image: e.target.value })}
          />
          <input
            type='text'
            placeholder='price'
            onChange={(e) => setgame({ ...game, price: e.target.value })}
          />

          <input
            type='text'
            placeholder='description'
            onChange={(e) => setgame({ ...game, description: e.target.value })}
          />
          <button onClick={() => handleAdd(game)}>add new game</button>
        </div>
      ) : null}
    </div>
  )
}

export default AddGame
