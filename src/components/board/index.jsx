import React from 'react'
import Proptypes from 'prop-types'
import Card from '../cards'

export default function Board({cards, flipped,handleClick}) {
    return <div className="board">
        {
            cards.map(card => (
            <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={100}
                height={100}  
                flipped={flipped.includes(card.id)}
                handleClick={() => handleClick(card.id)} 
                /> )
            )
        }
    </div>
}
Board.Proptype = {
    cards: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
    flipped: Proptypes.arrayOf(Proptypes.number).isRequired,
    handleClick: Proptypes.func.isRequired,
}