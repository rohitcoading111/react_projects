import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-72px)] w-[calc(100%-32px)] max-w-3xl flex-col items-center justify-center text-center">
      <span className="grid size-14 place-items-center rounded-2xl border border-[#3c3559] bg-[#242038] text-[#b4a3ff]"><SearchX size={24} /></span>
      <p className="mt-6 text-[10px] font-semibold tracking-[.15em] text-[#9a83ff]">404 · PAGE NOT FOUND</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This route isn’t in your prep plan.</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#9298aa]">The page may have moved, or the address may be incorrect. Head back to your dashboard to keep practicing.</p>
      <Link className="mt-7 inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#846ce0] bg-gradient-to-br from-[#8269e4] to-[#7058cf] px-4 text-xs font-semibold text-white transition hover:-translate-y-px hover:from-[#9179ef] hover:to-[#7e65df]" to="/"><ArrowLeft size={15} /> Back to dashboard</Link>
    </main>
  );
}

export default NotFound;
