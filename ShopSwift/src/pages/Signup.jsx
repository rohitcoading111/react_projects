import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
const [showPassword, setShowPassword] = useState(false);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
        },
      });

      streamRef.current = stream;
      setShowCamera(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch {
      alert("Camera permission denied!");
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");
    setCapturedImage(image);
  };

  const usePhoto = () => {
    setFormData((prev) => ({
      ...prev,
      profileImage: capturedImage,
    }));

    closeCamera();
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    setCapturedImage(null);
    setShowCamera(false);
  };

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

    const existingUser = users.find((user) => user.email === email);

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

    dispatch(login(newUser));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Account Created Successfully");
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center bg-violet-600 text-white p-10 xl:p-16">
          <h1 className="text-4xl xl:text-5xl font-bold">
            Join ShopSwift 🚀
          </h1>

          <p className="mt-6 text-base xl:text-lg leading-8 text-violet-100">
            Create your account and enjoy a fast, secure, and premium shopping
            experience.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
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
              className="w-full mt-2 p-3 sm:p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
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
              className="w-full mt-2 p-3 sm:p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="mt-5">
            <label className="font-medium">Password</label>

            <div className="relative">
              <input
               type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full mt-2 p-3 sm:p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
              />

              {showPassword ? (
              <FaEyeSlash
    onClick={() => setShowPassword(false)}
    className="absolute right-5 top-6 sm:top-7 text-gray-500 cursor-pointer"
  />
) : (
  <FaEye
    onClick={() => setShowPassword(true)}
    className="absolute right-5 top-6 sm:top-7 text-gray-500 cursor-pointer"
  />
)}
            </div>
          </div>

          <div className="mt-5">
            <label className="font-medium">Confirm Password</label>

            <div className="relative">
              <input
                 type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full mt-2 p-3 sm:p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-violet-500"
              />

              {showPassword ? (
              <FaEyeSlash
               onClick={() => setShowPassword(false)}
               className="absolute right-5 top-6 sm:top-7 text-gray-500 cursor-pointer"
             />
              ) : (
               <FaEye
                 onClick={() => setShowPassword(true)}
                 className="absolute right-5 top-6 sm:top-7 text-gray-500 cursor-pointer"
               />
          )}
            </div>
          </div>

          <div className="mt-5">
            <label className="font-medium block mb-3">
              Profile Photo
            </label>

            <div className="flex flex-col items-center gap-4 p-4 sm:p-6 border-2 border-dashed border-violet-300 rounded-2xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-violet-500 shadow">
                <img
                  src={
                    formData.profileImage ||
                    "https://placehold.co/150x150?text=Photo"
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => galleryRef.current.click()}
                  className="px-5 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition"
                >
                  📁 Add Your Photo
                </button>

                <button
                  type="button"
                  onClick={openCamera}
                  className="px-5 py-2 rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition"
                >
                  📷 Open Camera
                </button>
              </div>

              <input
                ref={galleryRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full mt-8 bg-violet-600 text-white py-3 sm:py-4 rounded-xl hover:bg-violet-700 transition"
          >
            Create Account
          </button>

          <div className="flex items-center my-8">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1" />
          </div>

          <p className="text-center text-sm sm:text-base text-gray-600">
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

      {showCamera && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 w-full max-w-sm">
            {!capturedImage ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-xl"
                />

                <button
                  type="button"
                  onClick={capturePhoto}
                  className="w-full mt-4 bg-violet-600 text-white py-3 rounded-xl"
                >
                  📸 Capture
                </button>
              </>
            ) : (
              <>
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="w-full rounded-xl"
                />

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    type="button"
                    onClick={retakePhoto}
                    className="flex-1 py-2 border rounded-xl"
                  >
                    🔄 Retake
                  </button>

                  <button
                    type="button"
                    onClick={usePhoto}
                    className="flex-1 py-2 bg-violet-600 text-white rounded-xl"
                  >
                    ✅ Use Photo
                  </button>
                </div>
              </>
            )}

            <button
              type="button"
              onClick={closeCamera}
              className="w-full mt-4 text-red-500"
            >
              Close
            </button>

            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Signup;