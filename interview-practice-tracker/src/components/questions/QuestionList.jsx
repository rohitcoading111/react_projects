import { CircleCheck, Clock3, Pencil, Trash2 } from "lucide-react";
import { statuses } from "../../questionOptions";

function QuestionList({ questions, totalQuestions, onUpdateStatus, onEdit, onDelete }) {
  if (questions.length === 0) {
    return (
      <div className="p-12 text-center">
        <CircleCheck className="mx-auto text-violet-300" size={28} />
        <h3 className="mt-3 font-semibold">{totalQuestions === 0 ? "No questions yet" : "No matching questions"}</h3>
        <p className="mt-2 text-sm text-slate-400">
          {totalQuestions === 0
            ? "Add a question to start building your practice list."
            : "Try a different search or clear your filters."}
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-800 px-5 max-sm:px-4">
      {questions.map((question) => {
        const statusColor = question.status === "Completed"
          ? "border-emerald-800 bg-emerald-950 text-emerald-300"
          : question.status === "In Progress"
            ? "border-blue-800 bg-blue-950 text-blue-300"
            : "border-slate-700 bg-slate-800 text-slate-300";
        const difficultyColor = question.difficulty === "Easy"
          ? "text-emerald-300"
          : question.difficulty === "Hard" ? "text-rose-300" : "text-amber-300";
        const updatedDate = new Date(question.updatedAt).toLocaleDateString();

        return (
          <article className="flex flex-wrap items-center gap-3 py-4" key={question.id}>
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-medium">{question.title}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-md bg-violet-500/10 px-2 py-1 text-violet-200">{question.category}</span>
                <span className={difficultyColor}>{question.difficulty}</span>
                <span className="inline-flex items-center gap-1 text-slate-500"><Clock3 size={13} /> Updated {updatedDate}</span>
              </div>
            </div>

            <label className={`rounded-lg border px-2 py-1.5 text-xs ${statusColor}`}>
              <span className="sr-only">Status for {question.title}</span>
              <select
                aria-label={`Update status for ${question.title}`}
                className="max-w-28 cursor-pointer bg-transparent outline-none"
                onChange={(event) => onUpdateStatus(question.id, event.target.value)}
                value={question.status}
              >
                {statuses.map((status) => <option className="bg-slate-900 text-white" key={status}>{status}</option>)}
              </select>
            </label>
            <button aria-label={`Edit ${question.title}`} className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white" onClick={() => onEdit(question)} type="button">
              <Pencil size={16} />
            </button>
            <button aria-label={`Delete ${question.title}`} className="rounded-lg p-2 text-slate-400 hover:bg-rose-950 hover:text-rose-300" onClick={() => onDelete(question)} type="button">
              <Trash2 size={16} />
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default QuestionList;
