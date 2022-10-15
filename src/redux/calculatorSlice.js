import { createSlice } from "@reduxjs/toolkit"
import * as math from "mathjs"

const initialState = {
    text: "",
    result: "",
  }

export const calculatorSlice = createSlice({
    name: 'counter',
  initialState,
  reducers: {
    addToText : (state,action) => {
        state.text = [...state.text,action.payload + ""]  
    },
    clearInput : (state) => {
        state.text = ""
        state.result = ""
    },
    calculateAll : (state) => {
        const calculatedFormul = state.text.join("")
        state.result = math.evaluate(calculatedFormul)
    }
  }
})

export const {addToText, clearInput,calculateAll} = calculatorSlice.actions

export default calculatorSlice.reducer