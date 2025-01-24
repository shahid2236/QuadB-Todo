import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherDisplay from './components/WeatherDisplay';
import Login from './components/Login';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4">
        {isLoggedIn ? (
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TaskInput />
              <TaskList />
            </div>
            <WeatherDisplay />
          </div>
        ) : (
          <Login />
        )}
      </main>
    </div>
  );
};

export default App;

