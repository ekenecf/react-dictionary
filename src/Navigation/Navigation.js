import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function Nav() {
  const routLinks = [
    {
      path: '/',
      text: 'Dictionary',
    },
    {
      path: '/Dictionary',
      text: 'Search Word',
    },
  ];
  return (
    <header className="header">
      <nav >
       
        <div >
          <ul >
            {routLinks.map((rout) => (
              <li key={uuid()} className="nav-link">
                <NavLink to={rout.path}>{rout.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
