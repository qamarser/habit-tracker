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
  : [
      {
        title: "Wake Up",
        description: "wake up at 5:45am",
        details,
        completedDays: 0, // Ensure it's initialized
        showCongrats: false, // Ensure the congrats flag is initialized
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
          let completedCount = habit.completedDays; // Start with current completedDays count
          
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              const oldStatus = detail.status; // Save the old status
              detail.status = payload.details[0].status; // Update the day's status

              // Only increment completedDays if the status is changed to "done"
              if (detail.status === "done" && oldStatus !== "done") {
                completedCount++; // Increment if we mark it as "done"
              }

    //           // Do nothing to completedDays if we change it to "none" or "fail"
    //           // We don't decrement completedDays if the status was previously "done"
    //         }
    //       });

    //       // Update completedDays without limiting it to 21
    //       habit.completedDays = completedCount;

    //       // If the habit reaches 21 days, show congratulations
    //       habit.showCongrats = habit.completedDays === 21;
    //     }
    //   });

    //   window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
    // },
         // Decrement completedDays only if changing from "done" to another status
         
      }
    });

    habit.completedDays = completedCount;

    // Show congrats only when completedDays reaches exactly 21
    if (completedCount === 21 && !habit.showCongrats) {
      alert("Congratulations, you formed a habit!");
      habit.showCongrats = true;
    } else if (completedCount !== 21) {
      habit.showCongrats = false; // Reset if not at 21
    }
  }
});

window.localStorage.setItem("newHabits", JSON.stringify(state.habits));
},
  },
});

export const { addHabit, deleteHabit, changeStatus } = habitSlice.actions;

export default habitSlice.reducer;