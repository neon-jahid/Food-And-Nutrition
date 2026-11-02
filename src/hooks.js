import { useEffect, useState, useSyncExternalStore } from "react";
import { storage } from "./utils.js";

/** Close a popover on outside click or Escape. */
export function useDismiss(ref, open, onClose) {
  useEffect(() => {
    if (!open) return;
    const onDown = e => { if (!ref.current?.contains(e.target)) onClose(); };
    const onKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, open, onClose]);
}

/** Prevent the page behind a modal / drawer from scrolling. */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

const noopSubscribe = () => () => {};

/**
 * false while prerendering and during hydration, true afterwards.
 * Anything that depends on the browser (clock, localStorage, URL query/hash) must wait for this,
 * otherwise the prerendered HTML and the first client render differ (hydration mismatch).
 */
export function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * useState backed by localStorage that is safe for prerendering:
 * starts with `fallback`, loads the saved value after mount, and only writes once loaded.
 */
export function usePersistentState(key, fallback, sanitize = v => v) {
  const [value, setValue] = useState(fallback);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setValue(sanitize(storage.get(key, fallback)));
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  // the first pass (loaded = false) must not overwrite the saved value with the fallback
  useEffect(() => {
    if (loaded) storage.set(key, value);
  }, [key, value, loaded]);
  return [value, setValue, loaded];
}
