import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      dispatch(login());
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 w-full rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
