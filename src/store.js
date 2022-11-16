import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './reducers/slice'

export default configureStore({
  reducer: {pages : pageReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})