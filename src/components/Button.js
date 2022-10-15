import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToText, calculateAll, clearInput } from "../redux/calculatorSlice"

function Button({content,info,bgColorCode,mathContent}) {

  const text = useSelector((state) => state.calculator.text)
  const dispatch = useDispatch()

  const handleClick = (content) => {
    if(content === "="){
      dispatch(calculateAll())
    }
    else if(content === "AC"){
      dispatch(clearInput())
    }
    else{
      dispatch(addToText(content))
    }
  }

  return (
    <div 
    className='button'
    style={{backgroundColor : bgColorCode}}
    onClick={() => handleClick(mathContent)}>
    {content}
    </div>
  )
}

export default Button