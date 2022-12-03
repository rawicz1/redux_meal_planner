import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Header} from './features/header/header'
import { MealsList } from './features/mealsList/mealsList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MealsList />
       
       
          
      </header>
    </div>
  );
}

export default App;
