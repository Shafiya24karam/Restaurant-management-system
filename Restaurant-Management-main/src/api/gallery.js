import axiosSecure from ".";

// fetch galley data
export const getGallery = async () => {
    const { data } = await axiosSecure(`/gallery`);
    return data;
};