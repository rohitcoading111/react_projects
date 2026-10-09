
import { useEffect, useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import CategoryProgress from "../components/dashboard/CategoryProgress";

function Dashboard() {
  const [questions, setQuestions] = useState([]);

useEffect(() => {
  const savedQuestions = JSON.parse(
    localStorage.getItem("interview-practice-questions") || "[]"
  );

  setQuestions(savedQuestions);
}, []); 

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed"
  );

  const dsaQuestions = questions.filter(
    (question) => question.category === "DSA"
  );

  const completedDSA = dsaQuestions.filter(
    (question) => question.status === "Completed"
  ).length;

  const interviewQuestions = questions.filter(
    (question) =>
      question.category === "Git & GitHub" ||
      question.category === "Technical"
  );

  const completedInterviewQuestions = interviewQuestions.filter(
    (question) => question.status === "Completed"
  ).length;

  const progress =
    totalQuestions === 0
      ? 0
      : Math.round(
          (completedQuestions.length / totalQuestions) * 100
        );

  const categories = [
    {
      name: "DSA",
      completed: completedDSA,
      total: dsaQuestions.length,
    },
    {
      name: "Git & GitHub",
      completed: completedQuestions.filter(
        (question) => question.category === "Git & GitHub"
      ).length,
      total: questions.filter(
        (question) => question.category === "Git & GitHub"
      ).length,
    },
    {
      name: "Technical",
      completed: completedQuestions.filter(
        (question) => question.category === "Technical"
      ).length,
      total: questions.filter(
        (question) => question.category === "Technical"
      ).length,
    },
  ];

  return (
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
          value={totalQuestions}
          description="All saved practice questions"
        />

        <StatCard
          title="DSA Completed"
          value={`${completedDSA} / ${dsaQuestions.length}`}
          description="Completed DSA questions"
        />

        <StatCard
          title="Interview Questions"
          value={`${completedInterviewQuestions} / ${interviewQuestions.length}`}
          description="Git & Technical questions"
        />

        <StatCard
          title="Machine Coding"
          value="In Progress"
          description="Frontend assignment"
        />
      </section>

      <div className="mt-8">
        <ProgressCard progress={progress} />
      </div>

      <CategoryProgress categories={categories} />
    </main>
  );
}

export default Dashboard;
