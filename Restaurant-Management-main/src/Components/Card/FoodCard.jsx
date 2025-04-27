import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const FoodCard = ({food}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      {/* food image */}
    <div className="relative">
      <img className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" src={food.image} alt={food.foodName} />
      {/* food content */}
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
        <div className="font-bold text-xl">{food.name}</div>
        <div className="text-sm">${food.price}</div>
      </div>
    </div>
    <div className="px-6 py-4 bg-white">
      <p className="text-gray-600 text-sm mb-2">Category: {food.category}</p>
      <p className="text-gray-600 text-sm mb-2">Quantity: {food.quantity}</p>
      {/* details button */}
     <Link to={`/all-foods/${food._id}`}>
     <button
       className="mt-4 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full bg-tertiary"
       // tertiary color for the button
     >
       Details
     </button>
     </Link>
    </div>
  </div>
  )
}
FoodCard.propTypes={
  food:PropTypes.object
}
export default FoodCard