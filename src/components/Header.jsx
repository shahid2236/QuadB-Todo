import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">QuadB To-Do</h1>
      {isLoggedIn && (
        <button
          onClick={() => dispatch(logout())}
          className="bg-white text-blue-600 px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
