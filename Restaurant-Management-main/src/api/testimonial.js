import axiosSecure from ".";

// fetch testimonials data
export const getTestimonials = async () => {
    const { data } = await axiosSecure(`/testimonials`);
    return data;
};