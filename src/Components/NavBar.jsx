/* eslint-disable react/prop-types */
import { useState } from "react";

const NavBar = ({ setSearchTerm, users = [] }) => {
  const [input, setInput] = useState("");
  const usersIds = users.map((user) => user.login);
  console.log(usersIds);
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
    setSearchTerm(value);
  }
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          GitHub Users
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                User Name
              </a>
              <ul className='dropdown-menu'>
                {usersIds.map((uid) => (
                  <li key={uid}>
                    <button className='dropdown-item'>{uid}</button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
