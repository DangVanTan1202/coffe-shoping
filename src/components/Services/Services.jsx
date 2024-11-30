import React from 'react';
import Img2 from '../../assets/coffee2.png';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: 'Espresso',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.',
    aosDelay: '100',
  },
  {
    id: 2,
    img: Img2,
    name: 'Americano',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    aosDelay: '300',
  },
  {
    id: 3,
    img: Img2,
    name: 'Cappuccino',
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet',
    aosDelay: '500',
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="fs-1 font-weight-bold text-dark">Best Coffee For You</h1>
          </div>

          {/* Services Card section */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="col d-flex justify-content-center"
              >
                <div className="card shadow-lg rounded-3" style={{ maxWidth: '300px' }}>
                  <div className="position-relative">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="card-img-top mx-auto d-block"
                      style={{
                        transform: 'translateY(-40px)',
                        transition: 'transform 0.3s, rotate 0.3s',
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text text-muted" style={{ fontSize: '0.875rem' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
