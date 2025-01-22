import { createSlice } from "@reduxjs/toolkit";

export const details = [
  { day: "Mon", status: "none" },
  { day: "Tue", status: "none" },
  { day: "Wed", status: "none" },
  { day: "Thu", status: "none" },
  { day: "Fri", status: "none" },
  { day: "Sat", status: "none" },
  { day: "Sun", status: "none" },
];

// Load habits from local storage if available, otherwise set default habit
const habitsFromStorage = localStorage.getItem("newHabits")
  ? JSON.parse(localStorage.getItem("newHabits"))
  : [{ title: "Wake Up", description: "wake up at 5:45am", details }];

let habits = [...habitsFromStorage];

const initialState = {
  habits: habits,
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    // Action to add a new habit
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload];
      habits = [...habits, payload];
      window.localStorage.setItem("newHabits", JSON.stringify(habits));
    },

    // Action to delete a habit by its title
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.title !== action.payload
      );
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },

    // Action to change the status of a habit for a specific day
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              detail.status = payload.details[0].status;
            }
          });
        }
      });
      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
  },
});

export const { addHabit, deleteHabit, changeStatus } = habitSlice.actions;

export default habitSlice.reducer;
