import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navigation.css'
// import { v4 as uuid } from 'uuid';

export default function Nav() {
  const { goBack } = useSelector((state) => state.dataReducer);
  return (
    <header >
      <nav className='header'>
      {goBack ? <NavLink to="/"> Back-to-Home</NavLink> : ''}
      </nav>
    </header>
  );
}
