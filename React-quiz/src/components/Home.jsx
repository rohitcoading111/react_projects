import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchQuestions } from "../services/quizApi";

const Home = () => {
  useEffect(() => {
  const getQuestions = async () => {
    const data = await fetchQuestions("JavaScript");
    console.log(data);
  };

  getQuestions();
}, []);
  const categories = [
    {
      title: "JavaScript",
      description: "Test your JavaScript fundamentals",
      questions: 20,
      icon: "JS",
    },
    {
      title: "React",
      description: "Challenge your React knowledge",
      questions: 15,
      icon: "⚛",
    },
    {
      title: "HTML & CSS",
      description: "Master the web development basics",
      questions: 20,
      icon: "WEB",
    },
    {
      title: "General Knowledge",
      description: "How much do you know?",
      questions: 25,
      icon: "GK",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              🚀 Learn • Practice • Improve
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Test Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Knowledge
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-8">
              Challenge yourself with interactive quizzes, improve your
              knowledge, and track your progress along the way.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/quiz"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/20"
              >
                Start Quiz →
              </Link>

              <Link
                to="/register"
                className="px-7 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800 transition font-semibold"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-slate-400 mt-1">Questions</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-slate-400 mt-1">Quizzes</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-slate-400 mt-1">Categories</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-slate-400 mt-1">Practice</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-blue-400 font-semibold mb-2">EXPLORE</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose a Category
            </h2>
            <p className="text-slate-400 mt-3">
              Pick a topic and start testing your skills.
            </p>
          </div>

          <Link
            to="/quiz"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-6">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold">{category.title}</h3>

              <p className="text-slate-400 text-sm mt-3 leading-6">
                {category.description}
              </p>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-800">
                <span className="text-sm text-slate-500">
                  {category.questions} Questions
                </span>

                <Link
                  to="/quiz"
                  className="text-blue-400 text-sm font-semibold"
                >
                  Start →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-blue-100 font-medium mb-2">
              READY TO PLAY?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Think you know it all?
            </h2>

            <p className="text-blue-100 mt-3 max-w-xl">
              Take a quiz and find out how much you really know.
            </p>
          </div>

          <Link
            to="/quiz"
            className="shrink-0 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition"
          >
            Start Quiz
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mt-5">Choose a Quiz</h3>
            <p className="text-slate-400 mt-2">
              Select your favorite category and difficulty.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mt-5">Answer Questions</h3>
            <p className="text-slate-400 mt-2">
              Answer questions and test your knowledge.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mt-5">Get Your Score</h3>
            <p className="text-slate-400 mt-2">
              See your results and improve your performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;