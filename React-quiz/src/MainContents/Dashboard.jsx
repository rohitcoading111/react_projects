import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchResults } from "../services/quizApi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadResults = async () => {
      try {
        setHistory(await fetchResults());
      } catch (error) {
        console.error(error);
      }
    };

    loadResults();
  }, []);

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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              bg-blue-500/10 border border-blue-500/20
              text-blue-400 text-xs font-bold tracking-widest">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              DASHBOARD
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-5">
              Welcome,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500
                bg-clip-text text-transparent">
                {user?.username || "User"}
              </span>{" "}
              👋
            </h1>

            <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl">
              Track your progress, analyze your performance and keep
              pushing your limits.
            </p>
          </div>

          <Link
            to="/quiz"
            className="group relative inline-flex items-center justify-center
              bg-blue-600 hover:bg-blue-500
              px-7 py-4 rounded-2xl font-bold
              shadow-[0_0_35px_rgba(37,99,235,0.25)]
              hover:shadow-[0_0_45px_rgba(37,99,235,0.4)]
              transition-all duration-300 hover:-translate-y-1"
          >
            <span>Start New Quiz</span>
            <span className="ml-3 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

        </div>


        {/* ================= STATS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

          {/* Total */}
          <div className="group relative overflow-hidden
            bg-white/[0.035] backdrop-blur-xl
            border border-white/[0.08]
            rounded-3xl p-6
            hover:border-blue-500/30
            hover:bg-white/[0.055]
            transition-all duration-300">

            <div className="absolute -right-10 -top-10 w-32 h-32
              bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative flex items-start justify-between">

              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Total Quizzes
                </p>

                <h2 className="text-4xl font-black mt-3">
                  {totalQuizzes}
                </h2>

                <p className="text-xs text-slate-500 mt-2">
                  Attempts completed
                </p>
              </div>

              <div className="w-11 h-11 rounded-2xl
                bg-blue-500/10 border border-blue-500/20
                flex items-center justify-center text-xl">
                📊
              </div>

            </div>
          </div>


          {/* Best */}
          <div className="group relative overflow-hidden
            bg-white/[0.035] backdrop-blur-xl
            border border-white/[0.08]
            rounded-3xl p-6
            hover:border-emerald-500/30
            hover:bg-white/[0.055]
            transition-all duration-300">

            <div className="absolute -right-10 -top-10 w-32 h-32
              bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="relative flex items-start justify-between">

              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Best Score
                </p>

                <h2 className="text-4xl font-black mt-3 text-emerald-400">
                  {bestScore}%
                </h2>

                <p className="text-xs text-slate-500 mt-2">
                  Personal best
                </p>
              </div>

              <div className="w-11 h-11 rounded-2xl
                bg-emerald-500/10 border border-emerald-500/20
                flex items-center justify-center text-xl">
                🏆
              </div>

            </div>
          </div>


          {/* Average */}
          <div className="group relative overflow-hidden
            bg-white/[0.035] backdrop-blur-xl
            border border-white/[0.08]
            rounded-3xl p-6
            hover:border-cyan-500/30
            hover:bg-white/[0.055]
            transition-all duration-300">

            <div className="absolute -right-10 -top-10 w-32 h-32
              bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative flex items-start justify-between">

              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Average Score
                </p>

                <h2 className="text-4xl font-black mt-3 text-cyan-400">
                  {averageScore}%
                </h2>

                <p className="text-xs text-slate-500 mt-2">
                  Across all attempts
                </p>
              </div>

              <div className="w-11 h-11 rounded-2xl
                bg-cyan-500/10 border border-cyan-500/20
                flex items-center justify-center text-xl">
                📈
              </div>

            </div>
          </div>


          {/* Rank */}
          <div className="group relative overflow-hidden
            bg-white/[0.035] backdrop-blur-xl
            border border-white/[0.08]
            rounded-3xl p-6
            hover:border-purple-500/30
            hover:bg-white/[0.055]
            transition-all duration-300">

            <div className="absolute -right-10 -top-10 w-32 h-32
              bg-purple-500/10 blur-3xl rounded-full" />

            <div className="relative flex items-start justify-between">

              <div>
                <p className="text-slate-400 text-sm font-medium">
                  Rank
                </p>

                <h2 className="text-4xl font-black mt-3 text-purple-400">
                  #{totalQuizzes === 0 ? "-" : 1}
                </h2>

                <p className="text-xs text-slate-500 mt-2">
                  Current position
                </p>
              </div>

              <div className="w-11 h-11 rounded-2xl
                bg-purple-500/10 border border-purple-500/20
                flex items-center justify-center text-xl">
                ⚡
              </div>

            </div>
          </div>

        </div>


        {/* ================= PERFORMANCE ================= */}
        <div className="mt-8
          bg-white/[0.035] backdrop-blur-xl
          border border-white/[0.08]
          rounded-3xl p-6 sm:p-8
          shadow-2xl">

          <div className="flex flex-col sm:flex-row sm:items-center
            sm:justify-between gap-4">

            <div>
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl
                  bg-blue-500/10 border border-blue-500/20
                  flex items-center justify-center">
                  📈
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Performance
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Your last 10 quiz scores
                  </p>
                </div>

              </div>
            </div>

            <div className="px-4 py-2 rounded-xl
              bg-slate-950/70 border border-white/[0.06]
              text-xs text-slate-400">
              LAST 10 ATTEMPTS
            </div>

          </div>


          <div className="mt-8 h-72">

            {history.length === 0 ? (

              <div className="h-full flex flex-col items-center justify-center">

                <div className="w-16 h-16 rounded-2xl
                  bg-slate-800/50
                  border border-white/[0.06]
                  flex items-center justify-center text-2xl mb-4">
                  📊
                </div>

                <p className="text-slate-500">
                  No quiz data yet
                </p>

                <p className="text-slate-600 text-sm mt-1">
                  Complete your first quiz to see your progress.
                </p>

              </div>

            ) : (

              <ResponsiveContainer width="100%" height="100%">

                <LineChart
                  data={history.slice(-10).map((quiz, index) => ({
                    quiz: `Quiz ${index + 1}`,
                    score: quiz.score,
                  }))}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -10,
                    bottom: 0,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="quiz"
                    stroke="#64748b"
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 100]}
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    tickFormatter={(value) => `${value}%`}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{
                      stroke: "#334155",
                      strokeDasharray: "4 4",
                    }}
                    contentStyle={{
                      backgroundColor: "#020617",
                      border: "1px solid #1e293b",
                      borderRadius: "14px",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                      color: "#fff",
                    }}
                    formatter={(value) => [`${value}%`, "Score"]}
                  />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={4}
                    dot={{
                      r: 5,
                      fill: "#3b82f6",
                      stroke: "#020617",
                      strokeWidth: 3,
                    }}
                    activeDot={{
                      r: 8,
                      stroke: "#93c5fd",
                      strokeWidth: 3,
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            )}

          </div>

        </div>


        {/* ================= CTA ================= */}
        <div className="relative overflow-hidden mt-8
          rounded-3xl
          border border-white/[0.1]
          bg-gradient-to-br from-blue-600/90
          via-indigo-600/90
          to-purple-700/90
          p-8 sm:p-10">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-32
            w-80 h-80 rounded-full
            border-[40px] border-white/5" />

          <div className="absolute right-20 -bottom-40
            w-72 h-72 rounded-full
            border-[50px] border-white/5" />

          <div className="relative max-w-2xl">

            <div className="inline-flex items-center gap-2
              px-3 py-1.5 rounded-full
              bg-white/10 border border-white/10
              text-blue-100 text-xs font-bold">
              <span>🚀</span>
              KEEP GOING
            </div>

            <h2 className="text-3xl sm:text-4xl font-black mt-5">
              Ready for another challenge?
            </h2>

            <p className="text-blue-100/80 mt-3 text-base sm:text-lg">
              Choose a category and test your programming knowledge.
            </p>

            <Link
              to="/quiz"
              className="group inline-flex items-center
                mt-7 bg-white text-slate-950
                px-6 py-3.5 rounded-2xl
                font-bold shadow-xl
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300"
            >
              Take Quiz
              <span className="ml-3 text-lg
                group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;