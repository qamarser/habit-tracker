import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip, //Displays information about a point on hover.
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";

const LinearChart = () => {
    const habits = useSelector((state) => state.allHabits.habits);

    // Function to calculate total habits completed each day
    const calculateTotalCompletedPerDay = () => {
        return habits.reduce((acc, habit) => {
            return acc + habit.details.filter(detail => detail.status === "done").length;
        }, 0);
    };

    // Function to prepare data for comparison of different habits over time
    const prepareComparisonData = () => {
        return habits.map(habit => ({
            title: habit.title,
            completedDays: habit.completedDays,
            totalCompletedPerDay: calculateTotalCompletedPerDay(), // Add total completed here
        }));
    };

    const comparisonData = prepareComparisonData();

    return (
        <div className="container mt-5">
            <h2 className='mb-4 headings'>Overall Performance</h2>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completedDays" stroke="#8884d8" />
                    <Line type="monotone" dataKey="totalCompletedPerDay" stroke='pink' activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LinearChart;
