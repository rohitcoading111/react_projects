import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchResults } from "../services/quizApi";

const Result = () => {
  const [result, setResult] = useState(() =>
    JSON.parse(localStorage.getItem("latestQuizResult"))
  );

  useEffect(() => {
    const loadLatestResult = async () => {
      try {
        const results = await fetchResults();
        if (results.length > 0) {
          setResult(results[0]);
          localStorage.setItem("latestQuizResult", JSON.stringify(results[0]));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadLatestResult();
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            No Result Found
          </h1>

          <Link
            to="/dashboard"
            className="inline-block mt-6 bg-blue-600 px-6 py-3 rounded-xl"
          >
            Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">

        <p className="text-blue-400 font-semibold">
          QUIZ COMPLETED
        </p>

        <h1 className="text-4xl font-bold mt-3">
          Great Job! 🎉
        </h1>

        <p className="text-slate-400 mt-3">
          {result.category} Quiz
        </p>

        <div className="my-10">

          <div className="text-7xl font-extrabold text-blue-400">
            {result.score}%
          </div>

          <p className="text-slate-400 mt-3">
            {result.correct} out of {result.totalQuestions} correct
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <Link
            to="/dashboard"
            className="bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold"
          >
            Dashboard
          </Link>

          <Link
            to="/quiz"
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
          >
            Try Again
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Result;