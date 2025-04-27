import axiosSecure from ".";

// fetch top six foods
export const getTopFoods = async () => {
    const { data } = await axiosSecure(`/top-foods`);
    return data;
};
// get all foods and search
export const getAllFoods = async (search = '') => {
    const { data } = await axiosSecure(`/all-foods?search=${search}`);
    return data;
};
// get single food
export const getSingleFood = async(id) =>{
    const {data} = await axiosSecure(`/all-foods/${id}`);
    return data;
}