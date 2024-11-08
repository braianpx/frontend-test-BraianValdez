import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Tareas', href: '/tasks' },
];

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const navigationMap = (navigation, isMovile) => { // mapea la navegacion y retorna un elemento jsx
    return navigation.map((item) => (
      <Link
        to={item.href}
        key={item.name}
        onClick={() => setActiveLink(item.href)} // Cambia el enlace activo al hacer clic
        className={`
          ${activeLink === item.href
            ? 'bg-primary text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
            ${isMovile && 'block'}
            rounded-md px-3 py-2 text-sm font-medium`
        }
      >
        {item.name}
      </Link>
    ))
  }

  return (
    <header>
    <Disclosure as="nav" className="bg-black-semi">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 end-0 flex items-center sm:hidden">
            {/* Botón del menú móvil */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-white">TestTech</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                { navigationMap(navigation, false) }
              </div>
            </div>
          </div>
        </div>
      </div>
              {/* menu movile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          { navigationMap(navigation, true) }
        </div>
      </DisclosurePanel>
    </Disclosure>
    </header>
  );
};

export default Navbar;