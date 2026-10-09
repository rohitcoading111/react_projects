
import { useEffect, useState } from "react";
import QuestionForm from "../components/questions/QuestionForm";
import QuestionList from "../components/questions/QuestionList";

const STORAGE_KEY = "interview-practice-questions";

function getSavedQuestions() {
  try {
    const savedQuestions = localStorage.getItem(STORAGE_KEY);

    if (!savedQuestions) {
      return [];
    }

    const parsedQuestions = JSON.parse(savedQuestions);

    return Array.isArray(parsedQuestions) ? parsedQuestions : [];
  } catch (error) {
    console.error("Failed to load saved questions:", error);
    return [];
  }
}

function Questions() {
  // Load saved questions when the component initializes
  const [questions, setQuestions] = useState(getSavedQuestions);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
    } catch (error) {
      console.error("Failed to save questions:", error);
    }
  }, [questions]);

  function handleAddQuestion(newQuestion) {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      newQuestion,
    ]);
  }

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      question.category === categoryFilter;

    const matchesDifficulty =
      difficultyFilter === "All" ||
      question.difficulty === difficultyFilter;

    const matchesStatus =
      statusFilter === "All" ||
      question.status === statusFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty &&
      matchesStatus
    );
  });

  const selectClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900";

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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Your Questions
          </h3>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {filteredQuestions.length} of {questions.length} questions
          </span>
        </div>

        <div className="mb-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by question title..."
            className={selectClass}
          />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={selectClass}
            aria-label="Filter by category"
          >
            <option value="All">All Categories</option>
            <option value="DSA">DSA</option>
            <option value="Git & GitHub">Git & GitHub</option>
            <option value="Technical">Technical</option>
          </select>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className={selectClass}
            aria-label="Filter by difficulty"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={selectClass}
            aria-label="Filter by status"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <QuestionList questions={filteredQuestions} />
      </section>
    </main>
  );
}

export default Questions;
