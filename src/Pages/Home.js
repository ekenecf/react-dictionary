import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Input = () => {
    const [state, setstate] = useState('');
    return (
        <div className='subheader'>
            <p>Welcome to Ekene's React Dictionary</p>
            <h2>NEW SEARCH</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input onChange={(event) => setstate(event.target.value)}
                    type="search"
                    placeholder="input word here..." required />
                <NavLink  to="/Dictionary"  state={{ state: state }}>
                    <button type="submit">Search</button>
                </NavLink>
            </form>
        </div>
    );
};
export default Input;
