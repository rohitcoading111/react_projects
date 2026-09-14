import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome, {user?.name || "User"} 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Ready to test your knowledge?
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold">Start Quiz</h2>
            <p className="text-slate-500 mt-2">
              Test your knowledge
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold">Categories</h2>
            <p className="text-slate-500 mt-2">
              Choose your favorite category
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold">Quiz History</h2>
            <p className="text-slate-500 mt-2">
              Check your previous results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;