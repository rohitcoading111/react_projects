import { useState } from "react";
import { categories, difficulties, statuses } from "../../questionOptions";

const fieldClass = "w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-violet-500";

function QuestionForm({ question, onSave, onCancel }) {
  const [title, setTitle] = useState(question ? question.title : "");
  const [category, setCategory] = useState(question ? question.category : categories[0]);
  const [difficulty, setDifficulty] = useState(question ? question.difficulty : difficulties[0]);
  const [status, setStatus] = useState(question ? question.status : statuses[0]);
  const [error, setError] = useState("");

  function submitForm(event) {
    event.preventDefault();
    if (!title.trim()) {
      setError("Please enter a question title.");
      return;
    }
    onSave({ title: title.trim(), category, difficulty, status });
  }

  return (
    <form className="space-y-4" onSubmit={submitForm} noValidate>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300" htmlFor="question-title">Question title</label>
        <input
          autoFocus
          className={fieldClass}
          id="question-title"
          maxLength={160}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
          placeholder="e.g. Explain how a hash map works"
          value={title}
        />
        {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300" htmlFor="question-category">Category</label>
          <select className={fieldClass} id="question-category" onChange={(event) => setCategory(event.target.value)} value={category}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300" htmlFor="question-difficulty">Difficulty</label>
          <select className={fieldClass} id="question-difficulty" onChange={(event) => setDifficulty(event.target.value)} value={difficulty}>
            {difficulties.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-300" htmlFor="question-status">Status</label>
          <select className={fieldClass} id="question-status" onChange={(event) => setStatus(event.target.value)} value={status}>
            {statuses.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800" onClick={onCancel} type="button">Cancel</button>
        <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500" type="submit">
          {question ? "Save changes" : "Add question"}
        </button>
      </div>
    </form>
  );
}

export default QuestionForm;
