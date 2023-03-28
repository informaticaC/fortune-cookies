import React from 'react'
import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'
import ChangeBackground from './ChangeBackground'


const NewPhraseBtn = ({setter, setImg}) => {
    const handleClick = () => {
        setter(getRandomArray(phrases))
        // setImg(getRandomArray([1,2,3,4]))
        ChangeBackground(setImg)
    }

    return (
      <div>
          <button className='button' onClick={handleClick}>Ver otro</button>
      </div>
    )
}

export default NewPhraseBtn