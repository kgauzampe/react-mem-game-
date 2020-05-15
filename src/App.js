import React, {useState, useEffect} from 'react'; 
import Board  from './components/board';
import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false) 

  useEffect(() => { // useEffect
    resizeBoard()
    setCards(initializeDeck())
   
  }, [])

  useEffect(() => {
    preloadImages()
  },cards)

  useEffect(() =>{
    const resizeListener = window.addEventListener('resize',resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })
  const handleClick = (id) => {
    setDisabled(true)
    if (flipped === 0) {
      setFlipped([...flipped,id])
      setDisabled(false)
    } else {
      if (doubleClicked(id)) return 
      setFlipped([flipped[0], id])
      if (matched(id)){
        setSolved([...solved,flipped[0],id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }
    
  }
  const preloadImages = () => {
    
    cards.map(card => {
      const src = `/img?${card.type}.png`
      new Image().src = src
     // return cards
    }) 
    
  }
  const resetCards = () => {
    setFlipped([])
    setDisabled(false) 
  }
  const doubleClicked = (id) => flipped.includes(id)
  const matched = (id) => {
    const clicked = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard === clicked
  }
  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientHeight,
      document.documentElement.clientWidth,
    ))
  }


  return (
  <div>
  <h2>Can you guess the cards</h2>
  <Board 
  dimension={dimension}
  cards={cards}
  flipped={flipped}
  handleClick={handleClick}
  disabled={disabled}
  solved={solved}
  />

  
  </div>
  );
}

