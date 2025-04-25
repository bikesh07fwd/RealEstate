import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-600">404</h1>
          <p className="text-2xl text-gray-700 mt-4">🚀 Lost in Space!</p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-600 text-lg">
            Houston, we have a problem! The page you requested is nowhere to be
            found.
          </p>
          <p className="text-gray-600 text-lg">
            Let's get you back to mission control.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-purple-600 text-white rounded-lg 
          hover:bg-purple-700 transition duration-300 ease-in-out
          text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
