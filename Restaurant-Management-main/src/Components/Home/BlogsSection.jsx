import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "../../api/blog"
import Heading from "../Shared/Header/Heading"
import BlogCard from "../Card/BlogCard"


const BlogsSection = () => {
  const { data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => getAllBlogs()
  })
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* heading section */}
        <Heading 
        heading="Our Latest Blogs"
        subHeading="Explore the latest articles, insights, and updates from our blog."
        />
        {/* map all blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            blogs?.slice(0, 3)?.map(blog => <BlogCard key={blog._id} blog={blog}/>)
          }
        </div>
    </div>
  )
}

export default BlogsSection