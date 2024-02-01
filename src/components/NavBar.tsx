import React from 'react';
import UpwardLogo from './UpwardLogo';

const NavBar: React.FunctionComponent = () => {
  return (
    <header className='bg-red-400 p-4'>
      <nav className='flex justify-between'>
        <UpwardLogo className='size-8' />
        <UpwardLogo className='size-8' />
      </nav>
    </header>
  );
};

export default NavBar;
