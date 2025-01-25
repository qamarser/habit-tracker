import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { useNavigate } from "react-router-dom";

const PerformanceChart = () => {
  const habits = useSelector((state) => state.habits?.habits || []);
  const navigate = useNavigate();

  // Prepare data for the chart
  const chartData = habits.map((habit) => ({
    name: habit.title,
    goalDesired: 365, // Fixed goal
    goalReached: habit.completedDays,
  }));

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