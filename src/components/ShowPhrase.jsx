import React from 'react'

const ShowPhrase = ({phraseRandom}) => {
    console.log("Frase que se debería mostrar:", phraseRandom)
    return (
      <div className='phraseElements'>
          <svg className='svgWave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#a2d9ff" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,181.3C672,160,768,128,864,144C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <div className='show-phrase'>
                <p>{phraseRandom}</p>
                <i className='bx bxs-quote-alt-right'></i>
            </div>

          <svg className='svgWave'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#0000" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,192C384,213,480,203,576,181.3C672,160,768,128,864,144C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  
      </div>
    
  )
}

export default ShowPhrase