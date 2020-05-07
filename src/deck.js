function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i <array.length -1; i++) {
       let randomIndex = Math.floor(Math.random() * (i + 1)) // shuffling cards
       let temp = array[i]
       _array[i] = _array[randomIndex] 
       _array[randomIndex] = temp
    }
    return _array;
}
export default function initializeDeck() {
    let id = 0
    const cards = ['react', 'reactu ', 'redux', 'vue', 'angular', 'jacascript', 'ruby', 'rails'
].reduce((acc,type) => {
    acc.push({
        id: id++,     // initailizing the deck
        type
    })
    acc.push({
        id: id++,
        type
    })
    return acc
},[])
return shuffle(cards)
}