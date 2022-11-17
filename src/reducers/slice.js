import { createSlice } from '@reduxjs/toolkit'
import experience from '../objects/experience'
import info from '../objects/info'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    cards: [new info(), new experience()]
  },
  reducers: {
    updateCard: (state, action) => {
      state.cards = state.cards.map(e => {
        if (e.id === action.payload.id) {
          let temp = e
          action.payload.kind === 'company' && (temp.company = action.payload.text)
          action.payload.kind === 'title' && (temp.title = action.payload.text)
          action.payload.kind === 'description' && (temp.description = action.payload.text)
          temp.height = action.payload.height
          return temp
        }
        return e
      })
    },

    addCard: (state, action) => {
      state.cards.splice(state.cards.findIndex(e => e.id === action.payload) + 1, 0, new experience(state.cards.length))      
    },

    removeCard: (state, action) => {
      state.cards = state.cards.filter(e => e.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCard, updateCard, removeCard } = pageSlice.actions

export default pageSlice.reducer