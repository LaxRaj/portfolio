"use client";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground hover:bg-surface"
    >
      <svg viewBox="0 0 24 24" fill="none" className="hidden dark:block size-4">
        <path
          d="M12 3v1.5M12 19.5V21M4.5 12H3M21 12h-1.5M6 6l1 1M17 17l1 1M18 6l-1 1M7 17l-1 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" className="block dark:hidden size-4">
        <path
          d="M20.5 14.2a8.5 8.5 0 1 1-10.7-10.7 7 7 0 0 0 10.7 10.7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
