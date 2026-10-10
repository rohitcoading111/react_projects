import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({ title, onClose, children }) {
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/70 p-4 max-sm:items-end"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section aria-labelledby="modal-title" aria-modal="true" className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl max-sm:p-4" role="dialog">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold" id="modal-title">{title}</h2>
          <button aria-label="Close dialog" className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white" onClick={onClose} type="button">
            <X size={18} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

export default Modal;
