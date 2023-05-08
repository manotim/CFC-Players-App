import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import players from './data'

const allPositions = [
  'all',
  ...new Set(players.map((player) => player.position)),
]
console.log(allPositions)

function App() {
  const [playerItem, setPlayerItem] = useState(players)
  const [positions, setPositions] = useState(allPositions)

  function filterPlayers(position) {
    if (position === 'all') {
      setPlayerItem(players)
      return
    }
    const newPlayer = players.filter((player) => player.position === position)
    setPlayerItem(newPlayer)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Chelsea Squad</h2>
          <div className='underline'></div>
        </div>
        <Categories filterPlayers={filterPlayers} positions={positions} />
        <Menu players={playerItem} />
      </section>
    </main>
  )
}

export default App
