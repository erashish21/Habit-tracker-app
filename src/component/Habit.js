// src/Habit.js
import React from 'react';

function Habit({ habit, onToggle, onDelete }) {
  return (
    <div className={`habit ${habit.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggle(habit.id)}
      />
      <span>{habit.text}</span>
      <button onClick={() => onDelete(habit.id)}>Delete</button>
    </div>
  );
}

export default Habit;
