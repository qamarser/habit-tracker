import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from './features/habitsSlice' /* contains the logic for managing the state related to habits.*/
const store = configureStore({
  reducer: {
    allHabits: habitsReducer, /* allHabits slice of the state will be managed by habitsReducer.*/
  },
})

export default store