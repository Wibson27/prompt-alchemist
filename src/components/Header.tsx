'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import useActiveSection from '@/hooks/activeHeader';
import { menuItems } from '@/data/menuItems';
import PromptFormModal from './PromptFormSection';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const activeSection = useActiveSection();
  const [activeHash, setActiveHash] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    console.log(activeHash);

    onHashChange(); // initial
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="sticky top-0  z-10 w-full ">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-1 justify-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className={`pb-1 border-b-2 ${
                    activeSection === item.url
                      ? 'border-white text-white font-semibold'
                      : 'border-transparent text-foreground hover:text-foreground-accent'
                  } transition-all duration-200`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button
              onClick={() => {
                toggleMenu();
                setIsModalOpen(true);
              }}
              className="text-black font-bold bg-primary hover:bg-primary-accent px-6 py-2 rounded-full shadow-neon transition"
            >
              Mulai Sekarang
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <HiBars3
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          id="mobile-menu"
          className="md:hidden"
        >
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="text-black font-bold bg-primary-accent hover:bg-primary-accent px-6 py-2 rounded-full shadow-neon transition"
              >
                Mulai Sekarang
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
      <PromptFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
