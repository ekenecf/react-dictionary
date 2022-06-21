import React from 'react';
import { useDispatch } from 'react-redux';
import getData from '../Redux/api';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Input = () => {
    const dispatch = useDispatch();
    const [state, setstate] = useState('');

    return (
        <div className='subheader'>
            <h2>NEW SEARCH</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(getData(state));
            }}>
                <input onChange={(event) => setstate(event.target.value)}
                    type="search"
                    placeholder="input word" required />
                <NavLink  to="/Dictionary"  state={{ state: state }}>
                    <button type="submit">Add</button>
                </NavLink>
            </form>
        </div>
    );
};
export default Input;
