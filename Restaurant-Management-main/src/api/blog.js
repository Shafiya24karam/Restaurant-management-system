import axiosSecure from ".";

// fetch blogs data
export const getAllBlogs = async () => {
    const { data } = await axiosSecure(`/blogs`);
    return data;
};