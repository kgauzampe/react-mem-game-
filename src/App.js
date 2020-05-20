import React, { useState, useEffect } from 'react';
import Board from './components/board'
import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

useEffect(() => {
  resizeBoard()
  setCards(initializeDeck())
},[])

useEffect(() => {
  preloadImages()
}, cards)

useEffect(() => {
  const resizeListiner = window.addEventListener('resize', resizeBoard)

  return () => window.removeEventListener('resize', resizeListiner)
})  
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    }else {
      if (doubleClicked(id)) return
      setFlipped([flipped[0],id])
      if (cardMatched(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  }
  const preloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`
      new Image().src = src 
    })
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  const doubleClicked =  (id => flipped.includes(id))
  const cardMatched = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  const resizeBoard = () => {
    setDimension(Math.min(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
    ),
    )
  }


  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Can you match all the cards?</h2>
     <Board
     dimension={dimension}
     cards={cards}
     flipped={flipped}
     handleClick={handleClick}
     disabled={disabled}
     solved={solved} />
         </div>
  )
} 