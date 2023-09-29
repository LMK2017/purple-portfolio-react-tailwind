import React from 'react';

import Logo3 from '../assets/logo3.png';

const Header = () => {
  const logoStyle = {
    width: '135px', // Adjust the width as desired (e.g., '30px', '40px', etc.)
    height: 'auto', // Maintain the aspect ratio
  };

  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <img src= {Logo3} alt="" style={logoStyle} />
          </a>
          {/* button */}
          <button className='btn btn-sm'>
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
