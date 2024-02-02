import React from 'react';
import UpwardLogo from './UpwardLogo';
import Menu from './Menu';
import Button from './Button';
import type { NavLink } from '../models/NavLink';
import ArrowRight from './ArrowRight';

const navLinks: NavLink[] = [
  {
    href: '#nosotros',
    label: 'Nosotros',
  },
  {
    href: '#servicios',
    label: 'Servicios',
  },
  {
    href: '#casos-de-exito',
    label: 'Casos de Éxito',
  },
  {
    href: '#contacto',
    label: 'Contactanos',
    asButton: true,
    icon: {
      value: <ArrowRight className='size-5' />,
    },
  },
];

const renderNavLinks = (): React.ReactNode[] =>
  navLinks.map((navLink, index) => {
    return (
      // TODO: Convert to a standalone component (NavLink component)
      <li key={`${navLink.href}-${index}`}>
        {navLink.asButton === true ? (
          <Button asChild>
            <a href={navLink.href}>
              {navLink.label} {navLink.icon?.value}
            </a>
          </Button>
        ) : (
          <a
            href={navLink.href}
            className='hover:text-gray-400 transition-all duration-200'
          >
            {navLink.label}
          </a>
        )}
      </li>
    );
  });

const NavBar: React.FunctionComponent = () => {
  return (
    <header className='p-4'>
      <nav className='flex justify-between'>
        <UpwardLogo className='size-8' />
        <div className='tablet:hidden flex'>
          <Menu className='size-8 text-white' />
        </div>
        <ul className='hidden tablet:flex text-white gap-16 items-center'>
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
