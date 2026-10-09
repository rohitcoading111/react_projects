
import { useState } from "react";
import QuestionForm from "../components/questions/QuestionForm";

function Questions() {
  const [questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion) {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      newQuestion,
    ]);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Questions
        </h2>

        <p className="mt-2 text-gray-500">
          Add and manage your interview practice questions.
        </p>
      </div>

      <div className="max-w-3xl">
        <QuestionForm onAddQuestion={handleAddQuestion} />
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          Your Questions
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Total questions added: {questions.length}
        </p>
      </div>
    </main>
  );
}

export default Questions;
