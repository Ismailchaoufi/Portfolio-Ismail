import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'My brand reflects my dedication to creativity, innovation, and delivering exceptional user experiences.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'My design services focus on creating visually engaging and user-friendly interfaces, with expertise in web, mobile, and graphic design to bring your ideas to life.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I provide full-stack development, building secure back-end systems and dynamic, responsive front-ends, delivering scalable web applications tailored to your needs.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I craft clear and engaging content that aligns with your brand\'s voice, whether for websites, blogs, or marketing materials, ensuring your message connects with your audience.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'My SEO services improve your website\'s visibility through tailored strategies, including keyword research, on-page optimization, and link building to drive organic traffic.',
  },
];

const ServiceSlider = () => {
  return (
    <div className="relative pb-12 h-[350px] sm:h-[550px]"> {/* Increased overall height */}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        modules={[FreeMode, Pagination]}
        className="h-full" // Use full height of container
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index} className="h-full"> {/* Ensure slide takes full height */}
            <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex flex-col h-full group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="flex-grow"> {/* Allow this div to grow and push the arrow to the bottom */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-base leading-relaxed">{item.description}</p>
              </div>
              <div className="text-3xl mt-4">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination container */}
      <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default ServiceSlider;