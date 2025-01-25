import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom";
import { createSelector } from 'reselect';

// Memoized selector to avoid unnecessary re-renders
const selectHabits = (state) => state.allHabits.habits;

const selectMemoizedHabits = createSelector([selectHabits], (habits) => habits);

const PerformanceChart = () => {
  const habits = useSelector(selectMemoizedHabits); // Use the memoized selector
  const navigate = useNavigate();

  console.log("Habits data from Redux store:", habits); // Debugging line

  // If no habits data is available or it's an empty array
  if (!habits || habits.length === 0) {
    return <p>No habits data available. Please add habits.</p>;
  }

  // Prepare data for the chart
  const chartData = habits.map((habit) => ({
    name: habit.title,
    goalDesired: 365, // Fixed goal
    goalReached: habit.completedDays,
  }));

  console.log("Chart Data:", chartData); // Debugging line

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <h1 className="mb-4">Habit Performance</h1>
      <div className="chart-container">
        <BarChart width={800} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="goalDesired" fill="#8884d8" name="Goal Desired" />
          <Bar dataKey="goalReached" fill="#82ca9d" name="Goal Reached" />
        </BarChart>
      </div>
    </div>
  );
};

export default PerformanceChart;
