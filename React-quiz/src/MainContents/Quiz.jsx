import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchQuestions } from "../services/quizApi";

const Quiz = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "Programming";

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]);

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
        setScore(0);
        setAnswersHistory([]);

        const data = await fetchQuestions(category, 10);

        if (!data || data.length === 0) {
          setError("No questions found for this category.");
          return;
        }

        const shuffledQuestions = data.map((question) => ({
          ...question,
          answers: shuffleAnswers(
            Object.values(question.answers).filter(
              (answer) => answer
            )
          ),
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

  const getCorrectAnswer = () => {
    return question.answers.find(
      (answer) =>
        answer &&
        (answer.isCorrect === true ||
          answer.isCorrect === "true")
    );
  };

  const handleAnswer = (answer) => {
    if (submitted) return;

    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || submitted) return;

    const correctAnswer = getCorrectAnswer();

    const isCorrect =
      selectedAnswer.id === correctAnswer.id;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: question.text,
        selectedAnswer: selectedAnswer.text,
        correctAnswer: correctAnswer.text,
        isCorrect,
      },
    ]);

    setSubmitted(true);
  };

  const handleNext = () => {
    if (!submitted) return;

    const correctAnswer = getCorrectAnswer();

    const isCurrentCorrect =
      selectedAnswer.id === correctAnswer.id;

    const finalScore =
      score + (isCurrentCorrect ? 1 : 0);

    if (currentQuestion === questions.length - 1) {
      const result = {
        category,
        score: Math.round(
          (finalScore / questions.length) * 100
        ),
        correct: finalScore,
        totalQuestions: questions.length,
        answers: [
          ...answersHistory,
          {
            question: question.text,
            selectedAnswer: selectedAnswer.text,
            correctAnswer: correctAnswer.text,
            isCorrect: isCurrentCorrect,
          },
        ],
      };

      const history =
        JSON.parse(localStorage.getItem("quizHistory")) || [];

      history.push(result);

      localStorage.setItem(
        "quizHistory",
        JSON.stringify(history)
      );

      navigate("/result");
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
            Score: {score}
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

              const correctAnswer =
                getCorrectAnswer();

              const isSelected =
                selectedAnswer?.id === answer.id;

              const isCorrect =
                correctAnswer?.id === answer.id;

              let answerStyle =
                "border-slate-700 bg-slate-800/50 hover:border-blue-500/50";

              if (submitted && isCorrect) {
                answerStyle =
                  "border-green-500 bg-green-500/10";
              } else if (
                submitted &&
                isSelected &&
                !isCorrect
              ) {
                answerStyle =
                  "border-red-500 bg-red-500/10";
              } else if (isSelected) {
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

                  {submitted && isCorrect && (
                    <p className="text-green-400 text-sm mt-3">
                      ✓ Correct Answer
                    </p>
                  )}

                  {submitted &&
                    isSelected &&
                    !isCorrect && (
                      <p className="text-red-400 text-sm mt-3">
                        ✕ Your Answer
                      </p>
                    )}

                </button>
              );
            })}

          </div>

          {submitted && (
            <div className="mt-6 p-5 rounded-2xl bg-slate-800 border border-slate-700">

              {selectedAnswer.id ===
              getCorrectAnswer().id ? (
                <p className="text-green-400 font-semibold">
                  🎉 Correct! Great job.
                </p>
              ) : (
                <div>

                  <p className="text-red-400 font-semibold">
                    ✕ Wrong Answer
                  </p>

                  <p className="text-slate-300 mt-2">
                    Correct answer:{" "}
                    <span className="text-green-400 font-semibold">
                      {getCorrectAnswer().text}
                    </span>
                  </p>

                </div>
              )}

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
                {currentQuestion === questions.length - 1
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