// src/HabitForm.js
import React, { useState } from 'react';

function HabitForm({ onAddHabit }) {
  const [habitText, setHabitText] = useState('');

  const handleInputChange = (e) => {
    setHabitText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitText.trim() !== '') {
      onAddHabit(habitText);
      setHabitText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new habit"
        value={habitText}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default HabitForm;
