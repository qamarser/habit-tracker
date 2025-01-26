import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { data } from 'react-router-dom';

const MonthlyCalendar = () => {
    const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1 className='text-center'>Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={data} />
      </div>
      <p  className='text-center'>
        <span className='bold'> Selected Date:</span> 
        {' '}
        {date.toLocaleDateString()}
      </p>
    </div>
  )
}

export default MonthlyCalendar
