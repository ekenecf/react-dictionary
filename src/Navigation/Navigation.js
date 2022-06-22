import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navigation.css'

export default function Nav() {
  const { goBack } = useSelector((state) => state.dataReducer);
  return (
    <header >
      <nav className='header'>
        <p>Welcome to Ekene's React Dictionary</p>
      {goBack ? <NavLink to="/"> Back-to-Home</NavLink> : ''}
      </nav>
    </header>
  );
}
