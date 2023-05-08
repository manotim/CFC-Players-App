import React from 'react'

const Menu = ({ players }) => {
  return (
    <div className='section-center'>
      {players.map((player) => {
        const { id, name, position, number, img, desc } = player
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>{number}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
