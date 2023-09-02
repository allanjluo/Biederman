import {configureStore} from '@reduxjs/toolkit'
import engagementsSlice from "./engagementsSlice"

export default configureStore({
  reducer:{
    engagements: engagementsSlice.reducer,
  }
})
