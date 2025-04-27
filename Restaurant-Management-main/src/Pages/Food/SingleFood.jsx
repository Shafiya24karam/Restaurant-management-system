import { Helmet } from "react-helmet-async"
import PrimaryHero from "../../Components/Hero/PrimaryHero"
import { useLoaderData } from "react-router-dom"


const SingleFood = () => {
    const food = useLoaderData();
  return (
    <>
     {/* helmet */}
     <Helmet>
                <title>Restaurant Management / {food.name}</title>
            </Helmet>
            {/* page title */}
            <PrimaryHero text="Food Details" linkHref="/all-foods" linkText="All Foods"/>
            {/* food details */}
      <div className="container mx-auto my-10 p-5">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Food Image */}
          <div className="md:w-1/2">
            <img
              src={food?.image}
              alt={food?.name}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          {/* Food Info */}
          <div className="md:w-1/2 p-6">
          <h1 className="text-xl font-bold text-primary mb-2">{food?.name}</h1>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-lg">{food?.category}</span>
          <span className="bg-tertiary text-white text-xs font-semibold px-2 py-1 rounded-lg">${food?.price}</span>
        </div>
            <p className="text-gray-600 mb-2"><strong>Made By:</strong> {food?.addedBy?.name}</p>
            <p className="text-gray-600 mb-2"><strong>Origin:</strong> {food?.origin}</p>
            <p className="text-gray-700 mb-4"><strong>Description:</strong> {food?.description}</p>
            <div className="mt-4">
        <button 
          // onClick={handlePurchase}
          className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 ease-in-out shadow-md transform hover:scale-105 text-sm"
        >
          Purchase
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleFood