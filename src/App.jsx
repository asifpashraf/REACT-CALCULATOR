import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './button.jsx'

function App() {

  return (
    <>
      <div className="container">
        <h1>calculator</h1>
        <div className="cal-body">
          <div className='inputBox'>
            <input type="text" id="display" />
          </div>
          <Button name="its great outside"/>
        </div>
      </div>
    </>
  )
}


export default App
