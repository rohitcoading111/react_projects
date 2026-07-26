import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  profileImage: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData((prev) => ({
      ...prev,
      profileImage: reader.result,
    }));
  };

  reader.readAsDataURL(file);
};
const handleSignup = (e) => {
  e.preventDefault();

  const { name, email, password, confirmPassword } = formData;

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    alert("Email already registered");
    return;
  }

const newUser = {
  id: Date.now(),
  name,
  email,
  password,
  profileImage: formData.profileImage,
};

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account Created Successfully");
  dispatch(login(newUser));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  navigate("/");
};

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        <div className="hidden lg:flex flex-col justify-center bg-violet-600 text-white p-16">
          <h1 className="text-5xl font-bold">
            Join ShopSwift 🚀
          </h1>

          <p className="mt-6 text-lg leading-8 text-violet-100">
            Create your account and enjoy a fast, secure,
            and premium shopping experience.
          </p>
        </div>

        <div className="p-12">

          <h2 className="text-4xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-3">
            Fill in your details below.
          </p>


          <div className="mt-8">
            <label className="font-medium">Full Name</label>

           <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
  className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
/>
          </div>

          <div className="mt-5">
            <label className="font-medium">Email</label>

           <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
/>
          </div>


          <div className="mt-5">
            <label className="font-medium">Password</label>

            <div className="relative">
             <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Create password"
  className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
/>

              <FaEye className="absolute right-5 top-7 text-gray-500 cursor-pointer" />
            </div>
          </div>


          <div className="mt-5">
            <label className="font-medium">Confirm Password</label>

            <div className="relative">
            <input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="Confirm password"
  className="w-full mt-2 p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
/>

              <FaEye className="absolute right-5 top-7 text-gray-500 cursor-pointer" />
            </div>
          </div>
  
          <div className="mt-5">
  <label className="font-medium">
    Profile Photo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="w-full mt-2"
  />
         </div>
         <button
  onClick={handleSignup}
  className="w-full mt-8 bg-violet-600 text-white py-4 rounded-xl hover:bg-violet-700 transition"
>
  Create Account
</button>


          <div className="flex items-center my-8">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1" />
          </div>


<p className="text-center mt-8 text-gray-600">
  Already have an account?
  <Link
    to="/login"
    className="text-violet-600 font-semibold ml-2 hover:underline"
  >
    Login
  </Link>
</p>

        </div>

      </div>
    </section>
  );
};

export default Signup;