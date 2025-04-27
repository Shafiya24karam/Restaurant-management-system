import { useQuery } from "@tanstack/react-query"
import { getTestimonials } from "../../api/testimonial"
import Heading from "../Shared/Header/Heading"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaColonSign } from "react-icons/fa6";

const Testimonials = () => {
  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => getTestimonials()
  })
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">

        {/* heading section */}
        <Heading heading="What Our Customers Say" subHeading="Read the experiences of our satisfied guests and see why they love dining with us." />
        <div>

          <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <div className="md:w-1/3 w-full flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper py-5"
              >
                <SwiperSlide>
                  <div className="relative w-full h-96">
                    <img
                      src="https://i.postimg.cc/kXzsgg3F/people-creating-food-content-upload-internet-food-lovers-23-2151461665.jpg"
                      alt="Testimonial"
                      className="absolute inset-0 w-full h-full object-cover rounded-md transition ease-in-out transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-96">
                    <img
                      src="https://i.postimg.cc/8CqBFznK/people-enjoying-mexican-barbecue-23-2151000332.jpg"
                      alt="Testimonial"
                      className="absolute inset-0 w-full h-full object-cover rounded-md transition ease-in-out transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-96">
                    <img
                      src="https://i.postimg.cc/gcDkpxhQ/people-creating-food-content-upload-internet-food-lovers-23-2151461620.jpg"
                      alt="Testimonial"
                      className="absolute inset-0 w-full h-full object-cover rounded-md transition ease-in-out transform duration-300 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>


              </Swiper>
            </div>
            <div className="md:w-2/3 w-full mt-4 md:mt-0">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper py-5"
              >
                {testimonials?.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-8 w-full md:w-[80%] bg-white rounded-md shadow-xl shadow-[#dbf0d0]">
                      <div className="flex justify-between items-center">
                        <FaColonSign className="text-4xl md:text-5xl lg:text-7xl text-tertiary" />

                        <Rating
                          style={{ maxWidth: 160 }}
                          value={testimonial.rating} // Assuming rating is part of testimonial data
                          readOnly
                        />
                      </div>
                      <p className="text-start py-5 text-xl text-zinc-400 leading-8">
                        {testimonial.comment}
                      </p>
                      <div className="py-5 flex space-x-4">
                        <div className="md:h-24 h-14 md:w-24 h-14">
                          <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-contain md:rounded-md rounded-full" />
                        </div>
                        <div className="pt-2">
                          <h3 className="text-3xl bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-bold">{testimonial.name}</h3>
                          <span className="block text-start pt-1">{testimonial.profession}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Testimonials