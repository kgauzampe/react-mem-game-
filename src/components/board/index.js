import React from 'react';
import Proptypes from 'prop-types'
import Card from '../card'
import './styles.css'

export default function Board({disabled,   dimension, cards, flipped,solved, handleClick}) {
    return (
        <div className="board">
            {
                cards.map(card => (
                    <Card
                        key={card.id}
                         id={card.id}
                         type={card.type}
                         width={dimension / 4.5}
                         height={dimension / 4.5}
                         flipped={flipped.includes(card.id)}
                         solved={solved.includes(card.id)}
                         handleClick={handleClick}
                         disabled={disabled || solved.includes(card.id) }
                      /> 
                ))}
              </div>
            )
}

Board.propTypes = {
    disabled: Proptypes.bool.isRequired,
    dimension: Proptypes.number.isRequired,
    cards: Proptypes.arrayOf(Proptypes.shape({})),
    flipped: Proptypes.arrayOf(Proptypes.number).isRequired,
    solved: Proptypes.arrayOf(Proptypes.number).isRequired,
    handleClick: Proptypes.func.isRequired,

}