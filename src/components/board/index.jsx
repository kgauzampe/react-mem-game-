import React from 'react'
import Proptypes from 'prop-types'
import Card from '../cards'
import './styles.css'

export default function Board({dimension, cards, flipped,handleClick}) {
    return <div className="board">
        {
            cards.map(card => (
            <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={dimension / 4 }
                height={dimension / 4}  
                flipped={flipped.includes(card.id)}
                handleClick={() => handleClick(card.id)} 
                /> )
            )
        }
    </div>
}
Board.Proptype = {
    dimension: Proptypes.number.isRequired,
    cards: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
    flipped: Proptypes.arrayOf(Proptypes.number).isRequired,
    handleClick: Proptypes.func.isRequired,
}