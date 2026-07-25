import {
  FaUserCircle,
  FaBox,
  FaHeart,
  FaMapMarkerAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Profile = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          My Account
        </h1>

        <div className="grid lg:grid-cols-4 gap-8">


          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex flex-col items-center">

              <FaUserCircle
                size={100}
                className="text-violet-600"
              />

              <h2 className="text-2xl font-bold mt-4">
                Rohit Pandey
              </h2>

              <p className="text-gray-500">
                rohit@email.com
              </p>

            </div>

            <div className="mt-8 space-y-3">

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-violet-100">
                <FaUserCircle />
                Profile
              </button>

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-violet-100">
                <FaBox />
                My Orders
              </button>

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-violet-100">
                <FaHeart />
                Wishlist
              </button>

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-violet-100">
                <FaMapMarkerAlt />
                Addresses
              </button>

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-violet-100">
                <FaCog />
                Settings
              </button>

              <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-100">
                <FaSignOutAlt />
                Logout
              </button>

            </div>

          </div>


          <div className="lg:col-span-3 space-y-8">


            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold mb-6">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  value="Rohit Pandey"
                  readOnly
                  className="border rounded-xl p-4"
                />

                <input
                  type="email"
                  value="rohit@email.com"
                  readOnly
                  className="border rounded-xl p-4"
                />

              </div>

              <button className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-xl hover:bg-violet-700">
                Edit Profile
              </button>

            </div>


            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h3 className="text-4xl font-bold text-violet-600">
                  12
                </h3>
                <p className="mt-2">
                  Orders
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h3 className="text-4xl font-bold text-violet-600">
                  5
                </h3>
                <p className="mt-2">
                  Wishlist
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <h3 className="text-4xl font-bold text-violet-600">
                  2
                </h3>
                <p className="mt-2">
                  Saved Addresses
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Profile;