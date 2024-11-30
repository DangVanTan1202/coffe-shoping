import React from 'react';
import Logo from '../../assets/website/coffee_logo.png';
import { FaCoffee } from 'react-icons/fa';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Services',
    link: '/#services',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
];

const Navbar = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md text-white"
        style={{ backgroundColor: '#212529' }} // Dark background
      >
        <div className="container py-2">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none text-white font-weight-bold fs-2 gap-2"
              >
                <img src={Logo} alt="Logo" className="w-25" />
                Coffee Cafe
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="d-flex justify-content-between align-items-center gap-4"
            >
              <ul className="d-none d-sm-flex list-unstyled d-flex align-items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="text-decoration-none text-white-70 hover:text-white py-2 px-4"
                      style={{ fontSize: '1.1rem' }}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary text-white d-flex align-items-center gap-2 px-4 py-2 rounded-3">
                Order
                <FaCoffee className="text-white" style={{ fontSize: '1.25rem' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
