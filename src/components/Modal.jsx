import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useDialogFocus } from "../hooks.js";

export default function Modal({ onClose, closeLabel, label, wide = false, children }) {
  const dialogRef = useRef(null);
  useDialogFocus(dialogRef);
  useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={e => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`relative max-h-[92vh] w-full animate-pop overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-7 dark:bg-slate-900 ${
          wide ? "sm:max-w-3xl" : "sm:max-w-xl"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
