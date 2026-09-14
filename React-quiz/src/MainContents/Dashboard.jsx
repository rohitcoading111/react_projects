import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const history =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

  const totalQuizzes = history.length;

  const bestScore =
    history.length > 0
      ? Math.max(...history.map((quiz) => quiz.score))
      : 0;

  const averageScore =
    history.length > 0
      ? Math.round(
          history.reduce((sum, quiz) => sum + quiz.score, 0) /
            history.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <p className="text-blue-400 font-medium">
              DASHBOARD
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Welcome, {user?.username || "User"} 👋
            </h1>

            <p className="text-slate-400 mt-3">
              Track your progress and improve your skills.
            </p>
          </div>

          <Link
            to="/quiz"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            Start New Quiz →
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">Total Quizzes</p>
            <h2 className="text-4xl font-bold mt-3">
              {totalQuizzes}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">Best Score</p>
            <h2 className="text-4xl font-bold mt-3 text-green-400">
              {bestScore}%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">Average Score</p>
            <h2 className="text-4xl font-bold mt-3 text-blue-400">
              {averageScore}%
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">Rank</p>
            <h2 className="text-4xl font-bold mt-3 text-purple-400">
              #{totalQuizzes === 0 ? "-" : 1}
            </h2>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold">
              Performance
            </h2>

            <div className="mt-8 h-64 flex items-end gap-3">

              {history.length === 0 ? (
                <div className="w-full flex items-center justify-center text-slate-500">
                  No quiz data yet
                </div>
              ) : (
                history.slice(-10).map((quiz, index) => (

                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center justify-end gap-2"
                  >

                    <span className="text-xs text-slate-400">
                      {quiz.score}%
                    </span>

                    <div
                      className="w-full bg-blue-500 rounded-t-lg"
                      style={{
                        height: `${Math.max(quiz.score, 5)}%`,
                      }}
                    />

                  </div>

                ))
              )}

            </div>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold">
              Recent Quizzes
            </h2>

            <div className="mt-6 space-y-4">

              {history.length === 0 ? (

                <p className="text-slate-500">
                  No quizzes attempted yet.
                </p>

              ) : (

                history
                  .slice(-5)
                  .reverse()
                  .map((quiz, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between bg-slate-800/50 rounded-xl p-4"
                    >

                      <div>
                        <h3 className="font-semibold">
                          {quiz.category || "Programming"}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {quiz.totalQuestions || 10} Questions
                        </p>
                      </div>

                      <span className="font-bold text-blue-400">
                        {quiz.score}%
                      </span>

                    </div>

                  ))

              )}

            </div>

          </div>

        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">

          <h2 className="text-3xl font-bold">
            Ready for another challenge?
          </h2>

          <p className="text-blue-100 mt-2">
            Choose a category and test your programming knowledge.
          </p>

          <Link
            to="/quiz"
            className="inline-block mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold"
          >
            Take Quiz →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;