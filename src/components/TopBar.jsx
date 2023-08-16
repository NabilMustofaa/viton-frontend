import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
 
 
function TopBar({ onLogout, name }) {
  return (
      <nav className=" bg-teal-500 p-3 justify-between items-center">
        <ul className=' flex flex-row justify-between'>
          <li><Link to="/">
            <img src='/images/logo.png' alt='logo' className='w-12 h-12' />
            </Link></li>
          <li className='h-12 flex flex-row justify-between' >
            <p className='text-white text-xl font-bold mt-2 pr-2'>{name}</p>
            <button onClick={onLogout} className='flex justify-center align-middle' > <FiLogOut className='mt-3 my-4 w-6 h-6 text-white' /></button>
            </li>
        </ul>
      </nav>
    )
}
 
TopBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default TopBar;