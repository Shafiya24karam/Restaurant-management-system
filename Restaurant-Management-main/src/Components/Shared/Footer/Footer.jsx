import { FaFacebookF, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { MdMarkEmailRead } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-secondary to-tertiary mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-between items-center text-black p-4">
            <div>
              <span className="text-3xl font-bold">Restaurant</span>

              <p className='py-7 max-w-sm'>
                It is a long established fact that a reader will be distracted
              </p>
              <div className="flex space-x-5">
                <FaFacebookF className='border border-zinc-700 rounded-full text-4xl p-2 hover:bg-tertiary hover:border-none transition duration-300' />
                <FaLinkedinIn className='border border-zinc-700 rounded-full text-4xl p-2 hover:bg-tertiary hover:border-none transition duration-300' />
                <RxDiscordLogo className='border border-zinc-700 rounded-full text-4xl p-2 hover:bg-tertiary hover:border-none transition duration-300' />
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <h2 className='text-[32px] font-semibold pb-5'>Link</h2>
              <div className="text-zinc-700">
                <span className='block hover:text-transition duration-300 hover:translate-x-2'>Home</span>
                <span className='block py-3 hover:text-secondary transition duration-300 hover:translate-x-2'>All Foods</span>
                <span className='block hover:text-secondary transition duration-300 hover:translate-x-2'>Gallery</span>
                <span className='block pt-3 hover:text-secondary transition duration-300 hover:translate-x-2'>Blogs</span>
              </div>
            </div>
            <div className='pt-5 lg:pt-0'>
              <h2 className='text-[32px] font-semibold pb-10'>Contact</h2>
              <div>
                <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2'>
                  <MdMarkEmailRead className='text-2xl text-secondary' />
                  <span className='text-sm'>chumkikhatun370@gmail.com</span>
                </div>
                <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2 py-2'>
                  <BiSolidPhoneCall className='text-2xl text-secondary' />
                  <span className='text-sm'>+880-1777250277</span>
                </div>
                <div className='flex gap-2 hover:text-third transition duration-300 hover:translate-x-2'>
                  <IoLocation className='text-2xl text-secondary' />
                  <span className='text-sm'>Sholua,Charghat,Rajshahi,Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black h-[2px] my-10"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-5">
            <div className="text-black flex space-x-2 justify-center items-center">
              <FaRegCopyright className='text-sm' />
              <p>All rights reserved, 2024 FarmHub.</p>
            </div>
            <div className="flex space-x-6 pt-3 md:pt-0 text-black">
              <p className='hover:text-secondary'>Terms & Conditions</p>
              <p className='hover:text-secondary'>Privacy Policy</p>
              <p className='hover:text-secondary'>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
