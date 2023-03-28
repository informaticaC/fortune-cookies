import { useState } from 'react'
import './App.css'

import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray.js'
import NewPhraseBtn from './components/NewPhraseBtn'
import ShowPhrase from './components/ShowPhrase'
import ShowAuthor from './components/ShowAuthor'

const imgs = [1, 2, 3, 4]

function App() {
  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(phrases))
  // console.log("Frase generada", phraseRandom);
  const [imgNro, setImgNro] = useState(getRandomArray(imgs));

  const appStyle = {
    backgroundImage: `url("/background/fondo${imgNro}.jpg")`
  }
  return (
    <div style={appStyle} className="App">
      <div className='card'>
        <h1>GALLETAS DE LA FORTUNA</h1>
        <ShowPhrase phraseRandom = {phraseRandom.phrase}/>
        <NewPhraseBtn setter ={setPhraseRandom} setImg = {setImgNro}/>
        <ShowAuthor author={phraseRandom.author}/>
        
      </div>
      
    </div>
  )
}

export default App
