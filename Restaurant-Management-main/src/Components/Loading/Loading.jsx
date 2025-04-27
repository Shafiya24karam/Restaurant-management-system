import { FiLoader } from 'react-icons/fi'; // Import a spinner icon from react-icons

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FiLoader className="animate-spin text-secondary text-6xl" />
      <p className="text-secondary text-xl mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
