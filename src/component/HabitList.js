// src/HabitList.js
import React from 'react';
import Habit from './Habit';

function HabitList({ habits, onToggle , onDelete }) {
  return (
     <div>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default HabitList;
