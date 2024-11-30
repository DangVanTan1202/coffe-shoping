import React from 'react';
import BannerImg from '../../assets/coffee-white.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import BgImg from '../../assets/website/coffee-texture.jpg';

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: '#270c03',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Banner = () => {
  return (
    <>
      <span id='about'></span>
      <div style={bgImage}>
        <div className="min-vh-100 d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <div className="row g-4">
              {/* Image section */}
              <div className="col-12 col-sm-6" data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="img-fluid mx-auto drop-shadow"
                  style={{ maxWidth: '430px' }}
                />
              </div>
              {/* Text content section */}
              <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up" className="fs-2 fs-sm-3 fw-bold">
                  Premium Blend Coffee
                </h1>
                <p data-aos="fade-up" className="text-muted fs-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio.
                </p>

                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div data-aos="fade-up" className="d-flex align-items-center gap-3">
                      <GrSecure className="fs-1 bg-danger p-2 rounded-circle" />
                      <span>Premium Coffee</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="d-flex align-items-center gap-3">
                      <IoFastFood className="fs-1 bg-warning p-2 rounded-circle" />
                      <span>Hot Coffee</span>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="d-flex align-items-center gap-3">
                      <GiFoodTruck className="fs-1 bg-warning p-2 rounded-circle" />
                      <span>Cold Coffee</span>
                    </div>
                  </div>

                  <div
                    data-aos="slide-left"
                    className="col-12 col-md-6 border-start border-primary ps-4">
                    <h1 className="fs-3 fw-semibold">Tea Lover</h1>
                    <p className="fs-6 text-muted">
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
