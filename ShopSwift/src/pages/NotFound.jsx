import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-violet-600">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-5 text-lg leading-8">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link
            to="/"
            className="flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl transition"
          >
            <FaHome />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-xl transition"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

      </div>

    </section>
  );
};

export default NotFound;