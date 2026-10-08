function ProgressCard({ progress }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Overall Progress
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your weekly interview preparation progress
          </p>
        </div>

        <span className="text-2xl font-bold text-gray-900">
          {progress}%
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gray-900 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressCard; 