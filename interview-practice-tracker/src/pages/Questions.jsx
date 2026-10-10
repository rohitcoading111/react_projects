import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Plus, Search, Trash2 } from "lucide-react";
import Modal from "../components/questions/Modal";
import QuestionForm from "../components/questions/QuestionForm";
import QuestionList from "../components/questions/QuestionList";
import { categories, difficulties, statuses } from "../questionOptions";

function Questions({ questions, onAddQuestion, onUpdateQuestion, onDeleteQuestion }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [formOpen, setFormOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [deletingQuestion, setDeletingQuestion] = useState(null);

  const filteredQuestions = questions.filter((question) => (
    question.title.toLowerCase().includes(search.trim().toLowerCase())
    && (categoryFilter === "All" || question.category === categoryFilter)
    && (difficultyFilter === "All" || question.difficulty === difficultyFilter)
    && (statusFilter === "All" || question.status === statusFilter)
  ));
  const showForm = formOpen || searchParams.get("add") === "1";

  function openForm() {
    setEditingQuestion(null);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingQuestion(null);
    if (searchParams.has("add")) {
      const params = new URLSearchParams(searchParams);
      params.delete("add");
      setSearchParams(params, { replace: true });
    }
  }

  function saveQuestion(question) {
    if (editingQuestion) {
      onUpdateQuestion(editingQuestion.id, question);
    } else {
      onAddQuestion(question);
    }
    closeForm();
  }

  function clearFilters() {
    setSearch("");
    setCategoryFilter("All");
    setDifficultyFilter("All");
    setStatusFilter("All");
  }

  const selectClass = "rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-violet-500";

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 max-sm:px-4 max-sm:py-7">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Your question library</p>
      <div className="mb-7 flex items-end justify-between gap-4 max-sm:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Practice library<span className="text-violet-400">.</span></h1>
          <p className="mt-2 text-sm text-slate-400">Search, organize and update your interview questions.</p>
        </div>
        <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-500 max-sm:px-3 max-sm:text-xs" onClick={openForm} type="button">
          <Plus size={16} /> Add question
        </button>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
        <div className="flex items-center justify-between border-b border-slate-800 p-5 max-sm:p-4">
          <div>
            <h2 className="font-semibold">All questions</h2>
            <p className="mt-1 text-xs text-slate-400">{filteredQuestions.length} of {questions.length} questions</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-slate-800 p-4">
          <label className="flex min-w-48 flex-1 items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 text-slate-400 focus-within:border-violet-500">
            <Search size={16} />
            <span className="sr-only">Search questions</span>
            <input className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500" onChange={(event) => setSearch(event.target.value)} placeholder="Search by title..." type="search" value={search} />
          </label>
          <label><span className="sr-only">Filter by category</span>
            <select className={selectClass} onChange={(event) => setCategoryFilter(event.target.value)} value={categoryFilter}>
              <option value="All">All categories</option>
              {categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <label><span className="sr-only">Filter by difficulty</span>
            <select className={selectClass} onChange={(event) => setDifficultyFilter(event.target.value)} value={difficultyFilter}>
              <option value="All">All difficulties</option>
              {difficulties.map((difficulty) => <option key={difficulty}>{difficulty}</option>)}
            </select>
          </label>
          <label><span className="sr-only">Filter by status</span>
            <select className={selectClass} onChange={(event) => setStatusFilter(event.target.value)} value={statusFilter}>
              <option value="All">All statuses</option>
              {statuses.map((status) => <option key={status}>{status}</option>)}
            </select>
          </label>
          {(search || categoryFilter !== "All" || difficultyFilter !== "All" || statusFilter !== "All") && (
            <button className="rounded-lg px-3 text-sm text-violet-300 hover:bg-violet-500/10" onClick={clearFilters} type="button">Clear filters</button>
          )}
        </div>

        <QuestionList
          onDelete={setDeletingQuestion}
          onEdit={(question) => {
            setEditingQuestion(question);
            setFormOpen(true);
          }}
          onUpdateStatus={(id, status) => onUpdateQuestion(id, { status })}
          questions={filteredQuestions}
          totalQuestions={questions.length}
        />
      </section>

      {showForm && (
        <Modal onClose={closeForm} title={editingQuestion ? "Edit question" : "Add a question"}>
          <QuestionForm question={editingQuestion} onCancel={closeForm} onSave={saveQuestion} />
        </Modal>
      )}

      {deletingQuestion && (
        <Modal onClose={() => setDeletingQuestion(null)} title="Delete question?">
          <p className="text-sm text-slate-300">Delete <strong>{deletingQuestion.title}</strong>? This can’t be undone.</p>
          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800" onClick={() => setDeletingQuestion(null)} type="button">Cancel</button>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-rose-700 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600"
              onClick={() => {
                onDeleteQuestion(deletingQuestion.id);
                setDeletingQuestion(null);
              }}
              type="button"
            >
              <Trash2 size={15} /> Delete
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}

export default Questions;
