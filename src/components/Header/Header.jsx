import React from 'react'
import UnitsDropdown from './Units';

function Header() {
  return (
    <header className="flex justify-between ">
      <img src="/assets/images/logo.svg" alt="logo" className='w-36 md:w-auto' />
     <UnitsDropdown />
    </header>
  );
}

export default Header
