import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Layers3, Plus, Sparkles } from "lucide-react";
import CategoryProgress from "../components/dashboard/CategoryProgress";
import ProgressCard from "../components/dashboard/ProgressCard";
import StatCard from "../components/dashboard/StatCard";
import { categories, difficulties } from "../questionOptions";

function Dashboard({ questions }) {
  const completed = questions.filter((question) => question.status === "Completed").length;
  const inProgress = questions.filter((question) => question.status === "In Progress").length;
  const notStarted = questions.filter((question) => question.status === "Not Started").length;
  const completionRate = questions.length ? Math.round((completed / questions.length) * 100) : 0;

  const categoryProgress = categories.map((category) => {
    const categoryQuestions = questions.filter((question) => question.category === category);
    const categoryCompleted = categoryQuestions.filter((question) => question.status === "Completed").length;
    return { name: category, total: categoryQuestions.length, completed: categoryCompleted };
  });

  const difficultyTotals = difficulties.map((difficulty) => ({
    name: difficulty,
    total: questions.filter((question) => question.difficulty === difficulty).length,
  }));

  const recentQuestions = [...questions]
    .sort((first, second) => new Date(second.updatedAt) - new Date(first.updatedAt))
    .slice(0, 5);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 max-sm:px-4 max-sm:py-7">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-300">Your preparation space</p>
      <div className="mb-8 flex items-end justify-between gap-4 max-sm:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Welcome back<span className="text-violet-400">.</span></h1>
          <p className="mt-2 text-sm text-slate-400">A little progress each day makes interviews feel easier.</p>
        </div>
        <Link className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500 max-sm:px-3 max-sm:text-xs" to="/questions?add=1">
          <Plus size={16} /> Add question
        </Link>
      </div>

      <section aria-label="Question statistics" className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        <StatCard title="Total questions" value={questions.length} caption="In your practice library" icon={BookOpen} tone="violet" />
        <StatCard title="Completed" value={completed} caption="Ready to revisit" icon={CheckCircle2} tone="green" />
        <StatCard title="In progress" value={inProgress} caption="Currently working on" icon={Clock3} tone="blue" />
        <StatCard title="Not started" value={notStarted} caption="Up next in your queue" icon={Layers3} tone="amber" />
        <StatCard title="Completion rate" value={`${completionRate}%`} caption="Of your question list" icon={Sparkles} tone="violet" />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <ProgressCard progress={completionRate} completed={completed} total={questions.length} />
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Difficulty mix</h2>
              <p className="mt-1 text-xs text-slate-400">Balance your practice sessions</p>
            </div>
            <Layers3 className="text-violet-300" size={19} />
          </div>
          {questions.length === 0 ? (
            <p className="mt-6 text-sm text-slate-500">Difficulty breakdown appears as you add questions.</p>
          ) : (
            <div className="mt-6 space-y-4">
              {difficultyTotals.map(({ name, total }) => {
                const percent = Math.round((total / questions.length) * 100);
                const barColor = name === "Easy" ? "bg-emerald-400" : name === "Medium" ? "bg-amber-400" : "bg-rose-400";
                return (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>{name}</span><strong>{total}</strong>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className={`h-full rounded-full transition-all ${barColor}`} style={{ width: `${percent}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CategoryProgress categories={categoryProgress} />

      <section className="mt-5 rounded-xl border border-slate-800 bg-slate-900/80 p-5 max-sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Recently updated</h2>
            <p className="mt-1 text-xs text-slate-400">Your latest practice activity</p>
          </div>
          {questions.length > 0 && <Link className="inline-flex items-center gap-1 text-xs text-violet-300 hover:text-violet-200" to="/questions">View all <ArrowRight size={14} /></Link>}
        </div>
        {recentQuestions.length === 0 ? (
          <div className="flex flex-wrap items-center gap-3 border-t border-slate-800 py-4">
            <Sparkles className="text-violet-300" size={20} />
            <p className="flex-1 text-sm text-slate-400">Your progress starts with one question.</p>
            <Link className="text-xs font-medium text-violet-300 hover:text-violet-200" to="/questions?add=1">Get started <ArrowRight className="inline" size={14} /></Link>
          </div>
        ) : (
          <div>
            {recentQuestions.map((question) => {
              const statusColor = question.status === "Completed"
                ? "text-emerald-300"
                : question.status === "In Progress" ? "text-blue-300" : "text-slate-400";
              return (
                <Link className="flex items-center gap-3 border-t border-slate-800 py-3" key={question.id} to="/questions">
                  <BookOpen className="shrink-0 text-violet-300" size={17} />
                  <span className="min-w-0 flex-1">
                    <strong className="block truncate text-sm font-medium">{question.title}</strong>
                    <span className="text-xs text-slate-500">{question.category} · {question.difficulty}</span>
                  </span>
                  <span className={`text-xs ${statusColor}`}>{question.status}</span>
                  <ArrowRight className="text-slate-500" size={15} />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
