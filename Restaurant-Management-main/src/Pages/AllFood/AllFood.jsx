import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import PrimaryHero from '../../Components/Hero/PrimaryHero';
import { getAllFoods } from '../../api/foods';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Loading/Error';
import TopFoodCard from '../../Components/Card/TopFoodCard';
import { debounce } from 'lodash';

const AllFood = () => {
  const [search, setSearch] = useState('');

  // Debounced Search Input
  const debouncedSearch = debounce((value) => {
    setSearch(value);
  }, 300); // 300ms debounce time

  const { data: foods, isLoading, error } = useQuery({
    queryKey: ['allFoods', search],
    queryFn: async () => getAllFoods(search),
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    // Cleanup debounce on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <>
      <Helmet>
        <title>Restaurant Management / All Foods</title>
      </Helmet>
      <PrimaryHero text="All Foods" />
      <div className="container mx-auto p-4">
        <div className="relative flex justify-center items-center mt-6">
          <div className="relative w-full md:w-3/4 lg:w-1/2">
            <input
              type="text"
              name="search"
              placeholder="Search for food... by food name"
              className="w-full p-4 pr-20 border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-300 ease-in-out shadow-md placeholder-gray-500 text-gray-900"
              onChange={handleSearchChange} // Use onChange to fetch as user types
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 bg-gradient-to-r from-secondary to-tertiary text-white rounded-r-lg shadow-lg hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
              {foods?.map((food) => (
                <TopFoodCard key={food._id} food={food} />
              ))}
            </div>
            {foods?.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No foods found</p>
            )}
          </>
        )}
        {error && <Error message={error.message} />}
      </div>
    </>
  );
};

export default AllFood;
