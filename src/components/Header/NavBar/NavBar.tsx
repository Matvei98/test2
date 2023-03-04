import React from 'react';
import './NavBar.css';
import Logor from './Images/Logo.png';
import Lupa from './Images/lupa.svg';

export const Navbar = () => {
  return (
    <>
      <div className='navBar'>
        <div className='container1'>
          <img src={Logor} alt='pictures' className='logor' />
        </div>
        <div className='container2'>
          <a href='www' className='nav_item'>
            Home
          </a>
          <a href='www' className='nav_item'>
            Category
          </a>
          <a href='www' className='nav_item'>
            About Me
          </a>
          <img src={Lupa} alt='pictures' className='lupa' />
          <a href='www' className='nav_item'>
            Search
          </a>
        </div>
        <div className='container3'>
          <button className='smal'>
            <p className='button_title'>Buy Me a Coffee</p>
          </button>
        </div>
      </div>
    </>
  );
};
