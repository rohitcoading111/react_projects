
function QuestionList({ questions }) {
  if (questions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          No questions yet
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Add your first interview question using the form above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {questions.map((question) => (
        <div
          key={question.id}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-gray-900">
                {question.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {question.category}
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                  {question.difficulty}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    question.status === "Completed"
                      ? "bg-green-50 text-green-700"
                      : question.status === "In Progress"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {question.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
