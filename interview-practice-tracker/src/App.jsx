import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Check, X } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import { categories, difficulties, statuses } from "./questionOptions";

function loadQuestions() {
  try {
    const savedQuestions = localStorage.getItem("interview-practice-questions");
    if (!savedQuestions) return [];

    const questions = JSON.parse(savedQuestions);
    if (!Array.isArray(questions)) {
      console.error("Saved questions are not a list.");
      return [];
    }

    // Add dates and translate old category/status names so older saves still work.
    return questions.map((question, index) => {
      if (!question || !question.title) return null;

      let category = question.category;
      if (category === "Technical" || category === "Full Stack Technical") {
        category = "Full-Stack Technical";
      }
      if (!categories.includes(category)) category = "DSA";

      let status = question.status;
      if (status === "Pending" || !statuses.includes(status)) status = "Not Started";

      const now = new Date().toISOString();
      return {
        ...question,
        id: question.id || `question-${index}-${Date.now()}`,
        title: question.title.trim(),
        category,
        difficulty: difficulties.includes(question.difficulty) ? question.difficulty : "Medium",
        status,
        createdAt: question.createdAt || now,
        updatedAt: question.updatedAt || now,
      };
    }).filter(Boolean);
  } catch (error) {
    console.error("Could not load saved questions:", error);
    return [];
  }
}

function App() {
  const [questions, setQuestions] = useState(loadQuestions);
  const [notification, setNotification] = useState("");
  const location = useLocation();

  useEffect(() => {
    try {
      localStorage.setItem("interview-practice-questions", JSON.stringify(questions));
    } catch (error) {
      console.error("Failed to save interview questions to LocalStorage:", error);
    }
  }, [questions]);

  useEffect(() => {
    if (!notification) return undefined;
    const timer = window.setTimeout(() => setNotification(""), 3200);
    return () => window.clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function addQuestion(question) {
    const now = new Date().toISOString();
    setQuestions((currentQuestions) => [
      ...currentQuestions,
      { ...question, id: crypto.randomUUID(), createdAt: now, updatedAt: now },
    ]);
    setNotification("Question added to your practice list");
  }

  function updateQuestion(id, changes) {
    setQuestions((currentQuestions) => currentQuestions.map((question) => (
      question.id === id
        ? { ...question, ...changes, updatedAt: new Date().toISOString() }
        : question
    )));
    setNotification("Question updated");
  }

  function deleteQuestion(id) {
    setQuestions((currentQuestions) => currentQuestions.filter((question) => question.id !== id));
    setNotification("Question deleted");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/30 text-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard questions={questions} />} />
        <Route
          path="/questions"
          element={(
            <Questions
              questions={questions}
              onAddQuestion={addQuestion}
              onUpdateQuestion={updateQuestion}
              onDeleteQuestion={deleteQuestion}
            />
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {notification && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-emerald-100 shadow-xl max-sm:inset-x-3 max-sm:bottom-3">
          <Check className="text-emerald-400" size={17} />
          <span className="flex-1">{notification}</span>
          <button aria-label="Dismiss notification" className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-white" onClick={() => setNotification("")} type="button">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
