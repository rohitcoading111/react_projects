import Navbar from "./components/layout/Navbar";

import StatCard from "./components/dashboard/StatCard";
import ProgressCard from "./components/dashboard/ProgressCard";
import CategoryProgress from "./components/dashboard/CategoryProgress";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="mt-2 text-gray-500">
            Track your DSA, Git, Full Stack and Machine Coding
            preparation.
          </p>
        </section>


        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Questions"
            value="15"
            description="All practice questions"
          />

          <StatCard
            title="DSA Completed"
            value="3 / 5"
            description="LeetCode problems"
          />

          <StatCard
            title="Interview Questions"
            value="6 / 10"
            description="Git + Full Stack"
          />

          <StatCard
            title="Machine Coding"
            value="In Progress"
            description="Frontend assignment"
          />
        </section>

        <div className="mt-8">
          <ProgressCard progress={60} />
        </div>

        {/* Category Progress */}
        <CategoryProgress />
      </main>
    </div>
  );
}

export default App;