
function QuestionList({
  questions,
  totalQuestions = questions.length,
  onUpdateStatus,
  onDeleteQuestion,
}) {
  if (questions.length === 0) {
    const hasNoQuestions = totalQuestions === 0;

    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
          <span className="text-2xl">
            {hasNoQuestions ? "📝" : "🔍"}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          {hasNoQuestions
            ? "No questions yet"
            : "No matching questions"}
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm text-gray-500">
          {hasNoQuestions
            ? "You haven't added any questions yet. Use the form above to start tracking your preparation."
            : "We couldn't find any questions matching your search or filters. Try changing your search or filters."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((question) => (
        <div
          key={question.id}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="min-w-0">
              <h3 className="break-words font-semibold text-gray-900">
                {question.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {question.category}
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                  {question.difficulty}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={question.status}
                onChange={(e) =>
                  onUpdateStatus(question.id, e.target.value)
                }
                aria-label={`Update status for ${question.title}`}
                className="min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              <button
                type="button"
                onClick={() => onDeleteQuestion(question.id)}
                className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                aria-label={`Delete ${question.title}`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
