import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './button.jsx'

function App() {
  const btnValues =["1","2","3","4","5","6","7","8","9","0",".","00","+","-","*","/"]

  return (
    <>
      <div className="container">
        <h1>calculator</h1>
        <div className="cal-body">
          <div className='inputBox'>
            <input type="text" id="display" readOnly/>
          </div>
          {btnValues.map((value) => (
            <Button text={value}/>
          ))}
          
        </div>
      </div>
    </>
  )
}


export default App
