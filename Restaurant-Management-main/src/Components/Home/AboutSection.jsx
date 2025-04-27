import { GiFoodTruck } from "react-icons/gi"
import Heading from "../Shared/Header/Heading"
import { IoFastFood } from "react-icons/io5"
import { GrSecure } from "react-icons/gr"


const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <Heading
        heading="About Us"
        subHeading="Discover who we are, what we stand for, and our commitment to excellence in everything we do."
      />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">

        <div className=" mb-6 md:mb-0">
          <div className=" md:h-96 md:w-[90%] w-full h-full">
            <img
              src="https://i.postimg.cc/Dzh0ZWry/close-up-appetizing-ramadan-meal-23-2151182546.jpg"
              alt="Company Values"
              className="inset-0 w-full h-full object-cover rounded-md transition ease-in-out transform duration-300 hover:scale-105"
              data-aos="fade-up"/>
          </div>
        </div>


        <div className="px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text mb-4">Our Core Values</h2>
          <p className="mb-4 text-lg text-gray-600">We are committed to delivering excellence through our core values:</p>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-tertiary" />
              <p>Quality Products</p>

            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-secondary" />
              <p>Fast Delivery</p>

            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-tertiary" />
              <p>Easy Payment method</p>

            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-secondary" />
              <p>Get Offers</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection