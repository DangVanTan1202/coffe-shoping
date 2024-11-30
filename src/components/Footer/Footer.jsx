import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from '../../assets/website/coffee-footer.jpg';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '400px',
  width: '100%',
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-dark bg-opacity-50 py-5">
        <div className="container">
          <div className="row py-5">
            {/* Company details */}
            <div className="col-12 col-md-4">
              <a href="#" className="text-white font-weight-bold display-4">
                Coffee Cafe
              </a>
              <p className="pt-4">
                Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
              </p>
              <a
                href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light mt-3">
                Visit our YouTube Channel
              </a>
            </div>

            {/* Footer links */}
            <div className="col-12 col-md-4">
              <h5 className="font-weight-bold">Important Links</h5>
              <ul className="list-unstyled">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-white hover-underline-animation">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="col-12 col-md-4">
              <h5 className="font-weight-bold">Quick Links</h5>
              <ul className="list-unstyled">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-white hover-underline-animation">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address and Social Links */}
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <h5 className="font-weight-bold">Address</h5>
              <p>Noida, Uttar Pradesh</p>
              <p>+91 1234567890</p>

              {/* Social Links */}
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="text-white fs-3">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white fs-3">
                  <FaFacebook />
                </a>
                <a href="#" className="text-white fs-3">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
