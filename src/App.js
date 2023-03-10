import React, { useState } from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';
const App = () => {
  
  return (
    <>
    <Header />
    <TaskList/>
     
    </>
  )
}

export default App