import React from 'react';
import Proptypes from 'prop-types'
import './styles.css'

export default function Card({handleClick, id,type, flipped, solved, height, width, disabled}) {
    return <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}

    onClick={() => disabled ? null :handleClick(id)}
    >
        <div className="flipper">
            <img
            style={{
                height,width
            }}
            className={flipped ? 'front' : 'back'}
            src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
            />

        </div>

    </div>

}
Card.propTypes = {
    handleClick: Proptypes.func.isRequired,
    id: Proptypes.number.isRequired,
    flipped: Proptypes.bool.isRequired,
    solved: Proptypes.bool.isRequired,
    type: Proptypes.string.isRequired,
    height: Proptypes.number.isRequired,
    width: Proptypes.number.isRequired,
    disabled: Proptypes.bool.isRequired

}