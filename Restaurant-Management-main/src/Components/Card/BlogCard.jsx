import PrimaryButton from "../Button/PrimaryButton";

const BlogCard = ({ blog }) => {
  return (
    <div 
      className="bg-white shadow-[0_4px_10px_rgba(50,205,50,0.5)] rounded-lg overflow-hidden p-4 space-y-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
    >
      <img 
        className="w-full h-60 object-cover rounded transition ease-in-out transform duration-300 hover:scale-110" 
        src={blog.image} 
        alt={blog.title} 
      />
      <div className="">
        <h2 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-secondary">
          {blog.title}
        </h2>
        <p className="text-gray-600 pt-3">
          {blog?.content?.length > 100 ? blog?.content?.substring(0, 100) + "....." : blog?.content}
        </p>
      </div>
      <div className="pt-4">
        <PrimaryButton text={'Read More'} />
      </div>
    </div>
  );
}

export default BlogCard;
