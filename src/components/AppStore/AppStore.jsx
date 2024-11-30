import React from 'react';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';
import BgPng from '../../assets/website/coffee-beans-bg.png';

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const AppStore = () => {
  return (
    <div className="py-5" style={backgroundStyle}> {/* Bootstrap padding class */}
      <div className="container">
        <div className="row align-items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="col-12 col-sm-6 text-center text-sm-start mb-4 mb-sm-0">
            {/* Text section */}
            <h1 className="fs-2 fs-sm-3 fw-semibold text-white opacity-90">
              Coffee Cafe is available for Android and IOS
            </h1>
            {/* Img section */}
            <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-3">
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="img-fluid" // Bootstrap responsive image class
                  style={{ maxWidth: '150px' }}
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="img-fluid"
                  style={{ maxWidth: '150px' }}
                />
              </a>
            </div>
          </div>
          {/* Empty div */}
          <div className="col-12 col-sm-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
