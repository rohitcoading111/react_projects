function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Interview Practice Tracker
          </h1>

          <p className="text-xs text-gray-500">
            Weekly Interview Preparation
          </p>
        </div>

   
        <div className="hidden items-center gap-4 sm:flex">
          <span className="text-sm text-gray-500">
            Sheet 01
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
            RP
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;