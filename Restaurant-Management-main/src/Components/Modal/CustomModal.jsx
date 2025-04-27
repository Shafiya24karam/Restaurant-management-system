import { useState, useEffect } from 'react';

const CustomModal = ({ isOpen, onClose, onSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Allow animation to complete
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white p-8 rounded-lg max-w-lg mx-auto shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6">Submit Your Experience</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              value="John Doe"
              readOnly
              className="w-full p-2 mt-2 border rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Feedback</label>
            <textarea
              className="w-full p-2 mt-2 border rounded"
              placeholder="Describe your experience..."
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomModal;
