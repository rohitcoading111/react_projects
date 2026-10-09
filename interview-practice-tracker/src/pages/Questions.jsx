
import { useState } from "react";
import QuestionForm from "../components/questions/QuestionForm";
import QuestionList from "../components/questions/QuestionList";

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

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            Your Questions
          </h3>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {questions.length} total
          </span>
        </div>

        <QuestionList questions={questions} />
      </section>
    </main>
  );
}

export default Questions;
