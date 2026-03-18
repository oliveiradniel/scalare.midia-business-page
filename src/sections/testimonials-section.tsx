import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { motion } from 'motion/react';

import testimonial1 from '../assets/images/testimonials/1.png';
import testimonial2 from '../assets/images/testimonials/2.png';
import testimonial3 from '../assets/images/testimonials/3.png';
import testimonial4 from '../assets/images/testimonials/4.png';
import testimonial5 from '../assets/images/testimonials/5.png';
import testimonial6 from '../assets/images/testimonials/6.png';
import testimonial7 from '../assets/images/testimonials/7.png';
import testimonial8 from '../assets/images/testimonials/8.png';
import testimonial9 from '../assets/images/testimonials/9.png';

export function TestimonialsSection() {
  const testimonialImages = [
    {
      id: 'testimonial-1',
      image: testimonial1,
    },
    {
      id: 'testimonial-2',
      image: testimonial2,
    },
    {
      id: 'testimonial-3',
      image: testimonial3,
    },
    {
      id: 'testimonial-4',
      image: testimonial4,
    },
    {
      id: 'testimonial-5',
      image: testimonial5,
    },
    {
      id: 'testimonial-6',
      image: testimonial6,
    },
    {
      id: 'testimonial-7',
      image: testimonial7,
    },
    {
      id: 'testimonial-8',
      image: testimonial8,
    },
    {
      id: 'testimonial-9',
      image: testimonial9,
    },
  ];

  return (
    <div className="mt-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="text-center text-3xl font-medium text-white"
      >
        Quem compra,{' '}
        <span className="from-primary bg-linear-to-r to-white bg-clip-text text-transparent">
          aprova
        </span>
        :
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1300: { slidesPerView: 5 },
          }}
          className="mt-8 sm:mt-16 sm:mask-x-from-90%"
        >
          {testimonialImages.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="border-primary rounded-lg border bg-white"
            >
              <img src={testimonial.image} alt="" className="h-auto xl:w-60" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
