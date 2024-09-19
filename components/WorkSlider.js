import thumb1 from "../public/thumb1.jpg";
import thumb2 from "../public/thumb2.jpg";
import thumb3 from "../public/thumb3.jpg";
import thumb4 from "../public/thumb4.jpg";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: {thumb1},
          link:'https://github.com/Ismailchaoufi/APPLICATION_GESTION_RH.git',
        },
        {
          title: 'title',
          path: {thumb2},
          link:'https://github.com/Ismailchaoufi/-Behavioral-analysis-of-drivers-using-Deep-Learning.git',
        },
        {
          title: 'title',
          path: {thumb3},
          link:'https://github.com/Ismailchaoufi/Application_JIBI.git',
        },
        {
          title: 'title',
          path: {thumb4},
          link:'https://github.com/Ismailchaoufi/APPLICATION_GESTION_RH.git',
        },
      ],
    },
  /*  {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          link:'',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link:'',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link:'',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link:'',
        },
      ],
    },*/
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';

import { Pagination} from 'swiper';

import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination]}
      className="'h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
                    key={index}
                    >
                      <Link href={image.link}>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt='' />
                          {/* overlay gradient */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title */}
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>VIEW</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                PROJECT
                              </div>
                              {/* icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
                  
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

