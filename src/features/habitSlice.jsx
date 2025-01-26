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

// Load habits from local storage if available, otherwise set default habits
const habitsFromStorage = localStorage.getItem("newHabits")
  ? JSON.parse(localStorage.getItem("newHabits"))
  : [
      {
        title: "Wake Up",
        description: "Wake up at 5:45am",
        details,
        completedDays: 0, // Track completed days
        showCongrats: false, // Prevent repeated popups
        goalDesired: 21, // Define the goal for habit formation
      },
    ];

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
          let completedCount = habit.completedDays; // Start with the current count

          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              const oldStatus = detail.status; // Save the old status
              detail.status = payload.details[0].status; // Update the status

              // Increment completedDays if changing from "none" or "fail" to "done"
              if (detail.status === "done" && oldStatus !== "done") {
                completedCount++;
              }

              // Decrement completedDays if changing from "done" to another status
              if (oldStatus === "done" && detail.status !== "done") {
                completedCount--;
              }
            }
          });

          // Update completedDays and ensure it's synced
          habit.completedDays = completedCount;

          // Check if goalDesired is reached and update showCongrats
          if (completedCount === habit.goalDesired && !habit.showCongrats) {
            habit.showCongrats = true; // Mark congratulations as shown
          } else if (completedCount !== habit.goalDesired) {
            habit.showCongrats = false; // Reset if no longer at goal
          }
        }
      });

      window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    },
  },
});

export const { addHabit, deleteHabit, changeStatus } = habitSlice.actions;

export default habitSlice.reducer;
