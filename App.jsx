import React, { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef()
  const [color, setColor] = useState()

  const handleToBold = () => {
    inputRef.current.classList.toggle('bold')
  }
  const handleToItalic = () => {
    inputRef.current.classList.toggle('italic')
  }
  const handleToUPPER = () => {
    inputRef.current.value = inputRef.current.value.toUpperCase()
  }
  const handleToMin = () => {
    inputRef.current.value = inputRef.current.value.toLowerCase()
  }
  const HandleColor = (e) => {
      setColor(e.target.value)
      inputRef.current.style.color = color
  }

  return (
    <div className='Container'>
      <div className='box'>
        <div className='header'>
          <button onClick={handleToBold}>B</button>
          <button onClick={handleToItalic}>I</button>
          <button onClick={handleToUPPER}>U</button>
          <button onClick={handleToMin}>M</button>
          <input type="color" onChange={HandleColor}/>
        </div>
        <div className='Input'>
        <p>”</p><input type="text" ref={inputRef} />
        </div>
      </div>
    </div>
  )
}

export default App
