import React from 'react'
import { useSelector } from 'react-redux'

function Input() {

  const text = useSelector((state) => state.calculator.text)
  const result = useSelector((state) => state.calculator.result)
  return (
    <div className='input'>
        <div className='input-text-screen'>
            <h1>
              {text}
            </h1>
        </div>
        <div className='input-result-screen'>
            <h3>
              {result}
            </h3>
        </div>
    </div>
  )
}

export default Input