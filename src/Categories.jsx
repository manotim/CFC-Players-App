import React from 'react'

const Categories = ({ filterPlayers, positions }) => {
  return (
    <div className='btn-container'>
      {positions.map((position, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterPlayers(position)}
          >
            {position}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
