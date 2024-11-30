import React from 'react';
import HeroPng from '../../assets/coffee2.png';

const Hero = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-white"
        style={{
          minHeight: '550px',
          backgroundColor: '#2f2f2f', // Dark background (could be replaced with a variable from your CSS)
        }}
      >
        <div className="container py-5">
          <div className="row">
            {/* Text Content Section */}
            <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center align-items-sm-start text-center text-sm-left order-2 order-sm-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="display-3 font-weight-bold"
              >
                We serve the richest{' '}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="text-transparent bg-gradient-to-b bg-primary"
                >
                  Coffee
                </span>{' '}
                in the city
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="btn btn-gradient mt-3 py-2 px-4 rounded-full">
                  Coffee And Code
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="col-12 col-sm-6 d-flex justify-content-center align-items-center relative order-1 order-sm-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="Coffee image"
                className="w-75 w-sm-100 mx-auto"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl position-absolute top-0 left-0"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl position-absolute bottom-0 right-0"
              >
                <h1 className="text-white">Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
