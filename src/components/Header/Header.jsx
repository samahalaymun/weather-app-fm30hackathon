import React from 'react'
import UnitsDropdown from './Units';

function Header() {
  return (
    <div className="flex justify-between ">
      <img src="/assets/images/logo.svg" alt="logo" className='w-40 md:w-auto' />
     <UnitsDropdown />
    </div>
  );
}

export default Header
