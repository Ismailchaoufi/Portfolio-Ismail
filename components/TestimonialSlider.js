import avt1 from '../public/t-avt-1.png';
import avt2 from '../public/t-avt-2.png';
import avt3 from '../public/t-avt-3.png';
// testimonial data
const testimonialData = [
  {
    image: avt1,
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Working with CHAOUFI Ismail was an absolute pleasure. The project was completed ahead of schedule, and the final product exceeded our expectations. Their attention to detail and ability to understand our needs made the process smooth and efficient.',
  },
  {
    image: avt2,
    name: 'Jane Doe',
    position: 'Customer',
    message:
      "Working with CHAOUFI Ismail has been an absolute pleasure. Their attention to detail, exceptional communication skills, and ability to understand our unique needs have made a significant impact on our project's success. "
  },
  {
    image: avt3,
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'The professionalism and expertise shown throughout the project were outstanding. CHAOUFI Ismail delivered a solution that fit perfectly with our vision, and their ongoing support has been invaluable.',
  },
];


import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import {Navigation, Pagination} from 'swiper';

import {FaQuoteLeft} from 'react-icons/fa'

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16
              '>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center
                relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight 
                    tracking-widest'>
                      {person.position}
                    </div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20 '>
                  {/* quote icon*/}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-3xl xl:text-6xl text-white/20 mx-auto
                    md:mx-0' />
                  </div>
                  {/*message */}
                  <div className='text-sm text-center md:text-left'> {person.message} </div>
                </div>
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;


