import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BookOpenCheck, LayoutDashboard, Menu, Plus, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function addQuestion() {
    setMenuOpen(false);
    navigate("/questions?add=1");
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 max-sm:px-4" aria-label="Main navigation">
        <Link className="flex items-center gap-3" to="/" onClick={() => setMenuOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-700 text-white">
            <BookOpenCheck size={19} />
          </span>
          <span>
            <strong className="block text-sm font-semibold">Prepwise</strong>
            <span className="text-[10px] text-slate-400">Interview Practice Tracker</span>
          </span>
        </Link>

        <div className={`${menuOpen ? "block" : "hidden"} absolute left-0 top-16 w-full border-b border-slate-800 bg-slate-950 p-3 md:static md:flex md:w-auto md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0`}>
          <NavLink
            className={({ isActive }) => `flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-violet-500/15 text-violet-200" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
            end
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            <LayoutDashboard size={16} /> Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => `flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-violet-500/15 text-violet-200" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
            onClick={() => setMenuOpen(false)}
            to="/questions"
          >
            <BookOpenCheck size={16} /> Questions
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500" onClick={addQuestion} type="button">
            <Plus size={16} /><span className="max-[420px]:hidden">Add question</span>
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-9 place-items-center rounded-lg text-slate-300 hover:bg-slate-800 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
