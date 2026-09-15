import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchQuestions, gradeQuestions, saveResult } from "../services/quizApi";

const Quiz = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const shuffleAnswers = (answers) => {
    const arr = [...answers];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  useEffect(() => {
    const getQuestions = async () => {
      try {
        setLoading(true);
        setError("");
        setSubmitted(false);
        setSelectedAnswer(null);
        setCurrentQuestion(0);
        setAnswersHistory([]);

        const data = await fetchQuestions(category, 10);

        if (!data || data.length === 0) {
          setError("No questions found for this category.");
          return;
        }

        const shuffledQuestions = data.map((question) => ({
          ...question,
          answers: shuffleAnswers(question.answers || []),
        }));

        setQuestions(shuffledQuestions);
      } catch (error) {
        console.log(error);
        setError("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, [category]);

  const question = questions[currentQuestion];

  const handleAnswer = (answer) => {
    if (submitted) return;

    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted) return;

    setAnswersHistory((prev) => [
      ...prev,
      {
        questionId: question._id,
        selectedAnswerId: selectedAnswer.id,
      },
    ]);

    setSubmitted(true);
  };

  const handleNext = async () => {
    if (!submitted || submitting) return;

    if (currentQuestion === questions.length - 1) {
      try {
        setSubmitting(true);
        const grading = await gradeQuestions(answersHistory);
        const result = await saveResult({
          category: category || "Mixed",
          score: grading.score,
          correct: grading.correct,
          totalQuestions: grading.totalQuestions,
          answers: grading.answers,
        });
        localStorage.setItem("latestQuizResult", JSON.stringify(result));
        navigate("/result");
      } catch (error) {
        setError(error.message);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const handleRetry = () => {
    navigate(
      `/quiz?category=${encodeURIComponent(category)}`
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />

          <p className="text-slate-400 mt-5">
            Loading {category} Quiz...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">

          <h2 className="text-2xl font-bold">
            {error}
          </h2>

          <div className="flex flex-wrap gap-3 justify-center mt-6">

            <button
              onClick={() => navigate("/")}
              className="bg-slate-700 px-6 py-3 rounded-xl"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 px-6 py-3 rounded-xl"
            >
              Dashboard
            </button>

            <button
              onClick={handleRetry}
              className="bg-green-600 px-6 py-3 rounded-xl"
            >
              Retry
            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <p className="text-blue-400 text-sm font-semibold">
              QUIZ
            </p>

            <h1 className="text-3xl font-bold mt-1">
              {category}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-sm"
            >
              Cancel
            </button>

          </div>

        </div>

        <div className="flex justify-between items-center mb-3">

          <p className="text-slate-400 text-sm">
            Question {currentQuestion + 1} of{" "}
            {questions.length}
          </p>

          <p className="text-slate-400 text-sm">
            Answered: {answersHistory.length}
          </p>

        </div>

        <div className="w-full bg-slate-800 rounded-full h-2 mb-8">

          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <p className="text-slate-400 text-sm mb-4">
            Question {currentQuestion + 1}
          </p>

          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
            {question.text}
          </h2>

          <div className="grid gap-4 mt-8">

            {question.answers.map((answer, index) => {

              const isSelected =
                selectedAnswer?.id === answer.id;

              let answerStyle =
                "border-slate-700 bg-slate-800/50 hover:border-blue-500/50";

              if (isSelected) {
                answerStyle =
                  "border-blue-500 bg-blue-500/10";
              }

              return (
                <button
                  key={answer.id}
                  onClick={() => handleAnswer(answer)}
                  disabled={submitted}
                  className={`w-full text-left p-5 rounded-xl border transition ${answerStyle}`}
                >

                  <div className="flex items-center gap-4">

                    <span className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span>
                      {answer.text}
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

          {submitted && (
            <div className="mt-6 p-5 rounded-2xl bg-slate-800 border border-slate-700">

              <p className="text-blue-300 font-semibold">
                Answer recorded. Continue to the next question.
              </p>

            </div>
          )}

          <div className="flex flex-wrap justify-between gap-3 mt-8">

            <button
              onClick={handleRetry}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold"
            >
              Retry
            </button>

            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={`px-7 py-3 rounded-xl font-semibold transition ${
                  selectedAnswer
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
              >
                {submitting
                  ? "Saving result..."
                  : currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question →"}
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Quiz;