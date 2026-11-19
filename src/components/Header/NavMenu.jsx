import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavDropdown } from './NavDropdown';

export const NavMenu = ({ navigationItems }) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
      {navigationItems.map((item) => {
        if (item.dropdown) {
          return <NavDropdown key={item.name} item={item} />;
        }

        const hasHash = item.path.includes('#');

        return (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => {
              const active = hasHash
                ? location.pathname === '/' && location.hash === `#${item.path.split('#')[1]}`
                : item.path === '/'
                  ? isActive && !location.hash
                  : isActive;

              return `text-xs uppercase tracking-[0.11em] font-medium transition-colors py-2 relative group whitespace-nowrap ${
                active ? 'text-[#866452] font-semibold' : 'text-[#6B584E] hover:text-[#2D201A]'
              }`;
            }}
          >
            {({ isActive }) => {
              const active = hasHash
                ? location.pathname === '/' && location.hash === `#${item.path.split('#')[1]}`
                : item.path === '/'
                  ? isActive && !location.hash
                  : isActive;

              return (
                <>
                  {item.name}
                  <span
                    className={`absolute bottom-0.5 left-0 h-[1.5px] bg-[#C78460] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              );
            }}
          </NavLink>
        );
      })}
    </nav>
  );
};
