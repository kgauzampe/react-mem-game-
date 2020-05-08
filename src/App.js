import React, {useState, useEffect} from 'react'
import Board from './components/board'
import initializeDeck from './deck'


 
export default function App() {
    const [cards, setCards] = useState([])
    const [flipped,setFlipped] = useState([])
    const [dimension, setDimension] = useState(400) 
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)


  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
   
     
  }, []) 
  useEffect(() => {
    preloadimages()
  }, cards)

    useEffect(() => {
      const resizeListener = window.addEventListener('resize', resizeBoard)

      return () => window.removeEventListener('resize', resizeListener) //resizing board
    }
    )

    const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {  //disabling clicked card
        setFlipped([id]) 
        setDisabled(true)
    } else {
        if (carddoubleclicked(id))  return //checking if card was double clicked
        setFlipped([flipped[0], id])  
        if (Matched(id)) {
          setSolved([...solved, flipped[0], id])
           resetCards()
        } else {
          setTimeout(resetCards, 3000)
        }
       
    }
    
    }

    const preloadimages = () => {
      cards.map(card => {
        const src = `/img/${card.type}.png`
        new Image().src = src
      })
      
    }

    const resetCards = () => {
      setFlipped([])
      setDisabled(false)
    }

    const carddoubleclicked = (id) => flipped.includes(id)

    const Matched = (id) => {
      const clickedCard = cards.find((card) => card.id === id)
      const flippedCard = cards.find((card) => flipped[0] === id)
      return flippedCard.type === clickedCard.type
    }

    const resizeBoard = () => {
      setDimension(Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight, // setting board size
         ),
         )
    }


    return(
        <div>
            <h2>Test your memory</h2>
            <Board
            dimension={dimension}
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}
            disabled={disabled}
            solved={solved}  
            />

        </div>
    )
}