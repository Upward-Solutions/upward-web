import React from 'react';
import UpwardLogo from './UpwardLogo';
import Menu from './Menu';

const NavBar: React.FunctionComponent = () => {
  return (
    <header className='p-4'>
      <nav className='flex justify-between'>
        <UpwardLogo className='size-8' />
        <Menu className='size-8 text-white' />
      </nav>
    </header>
  );
};

export default NavBar;
