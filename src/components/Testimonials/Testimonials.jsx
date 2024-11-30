import React from 'react';
import Slider from 'react-slick';

const TestimonialData = [
  {
    id: 1,
    name: 'Dilshad',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Sabir ali',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Dipankar kumar',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/104/104',
  },
  {
    id: 5,
    name: 'Satya Narayan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/103/103',
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 mb-5">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-4">
          <h1 className="display-4 font-weight-bold">Testimonials</h1>
        </div>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="my-4 d-flex justify-content-center">
              <div className="card shadow-lg rounded-lg p-4 mx-3" style={{ maxWidth: '300px' }}>
                <div className="text-center mb-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-circle img-fluid"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text text-muted">{data.text}</p>
                  <h5 className="card-title text-dark">{data.name}</h5>
                </div>
                <div className="position-absolute top-0 end-0 text-muted" style={{ fontSize: '3rem' }}>
                  ,,
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
