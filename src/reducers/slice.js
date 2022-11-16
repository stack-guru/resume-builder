import { createSlice } from '@reduxjs/toolkit'
import experience from '../objects/experience'
import info from '../objects/info'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    cards: [new info(), new experience()]
  },
  reducers: {
    updatePage: (state) => {
      console.log('udpate', state)
    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePage } = pageSlice.actions

export default pageSlice.reducer