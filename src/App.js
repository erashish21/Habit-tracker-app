// src/App.js
import React, { useState } from 'react';
import './App.css';
import HabitList from './component/HabitList';
import HabitForm from './component/HabitForm';

function App() {
 
  const [habits, setHabits] = useState([
    { id: 1, text: 'Exercise', completed: false, createdAt: Date.now() },
    { id: 2, text: 'Read', completed: false, createdAt: Date.now() },
    // Add more habits as needed
  ]);

  const handleToggle = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const addHabit = (text) => {
    const newHabit = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  // Filter habits created within the last 7 days for week view
  const weekViewHabits = habits.filter(
    (habit) =>
      new Date(habit.createdAt).getTime() >=
      new Date().getTime() - 7 * 24 * 60 * 60 * 1000
  );

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <h2>Week View</h2>
      <HabitList habits={weekViewHabits} onToggle={handleToggle} onDelete={deleteHabit} />
      <h2>All Habits</h2>
      <HabitList habits={habits} onToggle={handleToggle} onDelete={deleteHabit} />
    </div>
  );
}

export default App;

