import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordMessage, setPasswordMessage] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [forgotStep, setForgotStep] = useState("verify");
  const [forgotEmail, setForgotEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    dispatch(login(user));
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login Successful");
    navigate("/");
  };

  const handleVerifyEmail = () => {
    if (!forgotEmail) {
      setPasswordMessage("Please enter your email.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((u) => u.email === forgotEmail);

    if (!userExists) {
      setPasswordMessage("Email not found in our records.");
      return;
    }

    setPasswordMessage("");
    setForgotStep("update");
  };

  const handleUpdatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage("Passwords do not match.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordMessage("Password must be at least 6 characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {
      if (user.email === forgotEmail) {
        return {
          ...user,
          password: passwordData.newPassword,
        };
      }

      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setShowChangePassword(false);
    setForgotStep("verify");
    setForgotEmail("");
    setPasswordData({
      newPassword: "",
      confirmPassword: "",
    });
    setPasswordMessage("");

    alert("Password Updated Successfully ✅ Please login with your new password.");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-100 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center bg-violet-600 text-white p-10 xl:p-16">
          <h1 className="text-4xl xl:text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-6 text-base xl:text-lg leading-8 text-violet-100">
            Login to continue shopping with ShopSwift. Discover thousands of
            premium products with the best deals every day.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Enter your credentials to continue.
          </p>

          <div className="mt-8">
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

          <div className="mt-6">
            <label className="font-medium">Password</label>

            <div className="relative">
              <input
                 type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
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

          <div className="flex justify-end mt-3">
            <button
              type="button"
              onClick={() => {
                setShowChangePassword(true);
                setForgotStep("verify");
                setPasswordMessage("");
              }}
              className="text-violet-600 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white py-3 sm:py-4 rounded-xl transition"
          >
            Login
          </button>

          <div className="flex items-center my-8">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1" />
          </div>

          <p className="text-center text-sm sm:text-base text-gray-600">
            Don't have an account?

            <Link
              to="/signup"
              className="text-violet-600 font-semibold ml-2 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {showChangePassword && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl w-full max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold mb-5">
                Reset Password
              </h2>

              {forgotStep === "verify" ? (
                <>
                  <p className="text-sm text-gray-500 mb-3">
                    Enter your registered email to continue.
                  </p>

                  <input
                    type="email"
                    placeholder="Registered Email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full border rounded-lg p-3 mb-3"
                  />

                  {passwordMessage && (
                    <p className="text-red-500 text-sm">
                      {passwordMessage}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <button
                      onClick={() => setShowChangePassword(false)}
                      className="border px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleVerifyEmail}
                      className="bg-violet-600 text-white px-4 py-2 rounded-lg"
                    >
                      Verify Email
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-3">
                    Enter your new password below.
                  </p>

                  <input
                    type="password"
                    placeholder="New Password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg p-3 mb-3"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg p-3"
                  />

                  {passwordMessage && (
                    <p className="text-red-500 text-sm mt-3">
                      {passwordMessage}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
                    <button
                      onClick={() => {
                        setForgotStep("verify");
                        setPasswordMessage("");
                      }}
                      className="border px-4 py-2 rounded-lg"
                    >
                      Back
                    </button>

                    <button
                      onClick={handleUpdatePassword}
                      className="bg-violet-600 text-white px-4 py-2 rounded-lg"
                    >
                      Update Password
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;