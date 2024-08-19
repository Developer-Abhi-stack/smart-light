import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#000810] text-white p-4">
      <div className="container grid grid-cols-2 justify-center items-center">
      <div className='text-lg flex justify-center items-center gap-2'>
      <i className="ri-wifi-fill text-4xl text-[#0061BA]"></i>
      <div className="">Smart Lights</div>
      </div>
        <nav>
          <ul className="flex space-x-10 items-center justify-center">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">Products</a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">Software Services</a>
            </li>
            <li>
            <button className="bg-[#0061BA] text-white font-bold py-2 px-10 rounded">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
