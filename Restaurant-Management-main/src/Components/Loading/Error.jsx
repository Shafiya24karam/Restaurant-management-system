
import { FiAlertCircle } from 'react-icons/fi'; // Import an alert icon from react-icons

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FiAlertCircle className="text-red-500 text-6xl" />
      <p className="text-red-500 text-xl mt-4">Error loading data</p>
      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  );
};

export default Error;
