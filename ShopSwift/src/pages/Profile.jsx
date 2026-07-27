import React, { useState } from "react";
import { Edit, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = storedUser
    ? JSON.parse(storedUser)
    : {
        name: "",
        email: "",
        profileImage: "",
      };

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    name: currentUser.name || "",
    email: currentUser.email || "",
    profileImage: currentUser.profileImage || "",
  });

  const handleSave = () => {
    const updatedUsers = users.map((user) => {
      if (user.email === currentUser.email) {
        return {
          ...user,
          ...formData,
        };
      }

      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const updatedCurrentUser = {
      ...currentUser,
      ...formData,
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedCurrentUser)
    );

    setFormData(updatedCurrentUser);
    setIsEditing(false);

    alert("Profile Updated Successfully ✅");
    window.location.reload();
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

  const handleVerifyPassword = () => {
    if (password === currentUser.password) {
      setIsEditing(true);
      setShowPasswordModal(false);
      setPassword("");
      setPasswordError("");
    } else {
      setPasswordError("Incorrect Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-slate-100 overflow-hidden border border-slate-100">
        <div className="h-36 sm:h-44 bg-gradient-to-tr from-violet-600 to-indigo-600 relative p-4 sm:p-6 flex items-start">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition hover:scale-105"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Back
          </button>
        </div>

        <div className="px-5 sm:px-10 pb-8 sm:pb-10">
          <div className="-mt-16 sm:-mt-20 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-30 transition"></div>

              <img
                src={
                  formData.profileImage ||
                  "https://placehold.co/150x150?text=User"
                }
                alt="Profile"
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-slate-900">
              {formData.name || "Your Name"}
            </h2>

            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              Welcome to SkyMart 👋
            </p>
          </div>

          <div className="mt-8 sm:mt-10 space-y-4">
            <div className="group flex items-center gap-4 border border-slate-100 bg-slate-50 hover:bg-slate-100 p-4 sm:p-5 rounded-2xl transition">
              <div className="bg-violet-100 text-violet-600 p-3 rounded-xl">
                <User size={22} />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Full Name
                </p>

                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="border rounded-lg px-3 py-2 w-full mt-2"
                  />
                ) : (
                  <h3 className="font-semibold text-base sm:text-lg text-slate-800 break-words">
                    {currentUser.name || "Your Name"}
                  </h3>
                )}
              </div>
            </div>

            <div className="group flex items-center gap-4 border border-slate-100 bg-slate-50 hover:bg-slate-100 p-4 sm:p-5 rounded-2xl transition flex-wrap">
              <div className="bg-violet-100 text-violet-600 p-3 rounded-xl">
                <Mail size={22} />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Email Address
                </p>

                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="border rounded-lg px-3 py-2 w-full mt-2"
                  />
                ) : (
                  <h3 className="font-semibold text-base sm:text-lg text-slate-800 break-all">
                    {currentUser.email || "No Email"}
                  </h3>
                )}
              </div>

              {isEditing && (
                <div className="w-full mt-2">
                  <p className="text-xs text-slate-400 mb-2">
                    Update Profile Picture
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          {isEditing ? (
            <button
              onClick={handleSave}
              className="mt-8 sm:mt-10 w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setShowPasswordModal(true)}
              className="mt-8 sm:mt-10 w-full bg-violet-600 hover:bg-violet-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"
            >
              <Edit size={18} />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 sm:p-6 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Verify Password
            </h2>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
            />

            {passwordError && (
              <p className="text-red-500 text-sm mt-2">
                {passwordError}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setPassword("");
                  setPasswordError("");
                }}
                className="px-5 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={handleVerifyPassword}
                className="px-5 py-2 rounded-lg bg-violet-600 text-white"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;