import React from 'react'
import Proptypes from 'prop-types'
import Card from '../cards'
import './styles.css'

export default function Board({dimension, disabled, cards, flipped,handleClick}) {
    return <div className="board">
        {
            cards.map(card => (
            <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={dimension / 4 } // initializing the board
                height={dimension / 4}  
                flipped={flipped.includes(card.id)}
                handleClick={handleClick} 
                disabled={disabled}
                /> )
            )
        }
    </div>
}
Board.Proptype = {
    disabled: Proptypes.bool.isRequired,
    dimension: Proptypes.number.isRequired,    // board property types
    cards: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
    flipped: Proptypes.arrayOf(Proptypes.number).isRequired,
    handleClick: Proptypes.func.isRequired,
}