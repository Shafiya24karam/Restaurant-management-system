import { useState } from "react";
import Heading from "../Header/Heading";
import AccordionItem from "./AccordionItem";
import image from '../../../assets/chef-holding.jpg';

const Accordion = () => {
  const accordionItems = [
    {
      title: "What is Restaurant Management?",
      content: "Restaurant management involves overseeing all aspects of a restaurant's operations, including staff management, customer service, inventory control, and financial management.",
    },
    {
      title: "How does the system help with reservations?",
      content: "Our system provides an easy-to-use interface for managing reservations, allowing you to track and confirm bookings, manage table assignments, and handle cancellations efficiently.",
    },
    {
      title: "Can the system handle multiple locations?",
      content: "Yes, our system is designed to manage multiple locations, providing centralized control and reporting for all your restaurants.",
    },
    {
      title: "What kind of support is available?",
      content: "We offer 24/7 customer support through various channels including phone, email, and live chat. Our support team is ready to assist you with any issues or questions you may have.",
    },
    {
      title: "Is there a mobile app available?",
      content: "Yes, our system includes a mobile app that allows you to manage your restaurant's operations on the go. The app provides access to key features and real-time updates.",
    },
  ];

  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      {/* Heading Section */}
      <Heading
        heading="Frequently Asked Questions"
        subHeading="Find answers to the most common questions about our restaurant management system"
      />
      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-10">
        <div className="md:w-1/2 w-full mt-4 md:mt-0">
          {accordionItems?.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <AccordionItem
                title={item.title}
                content={item.content}
                isActive={isActive === index}
                onClick={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="relative w-full h-96">
            <img
              src={image}
              alt="Testimonial"
              className="absolute inset-0 w-full h-full object-cover rounded-md transition ease-in-out transform duration-300 hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
