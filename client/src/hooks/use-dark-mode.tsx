import { useEffect } from "react";

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    (document.body as any).style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    (document.body as any).style.colorScheme = 'light';
  }
}

export function useDarkMode() {
  useEffect(() => {
    // Prefer saved theme; default to original dark design
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else {
      applyTheme('dark');
    }
  }, []);
}

export function useThemeToggle() {
  const setTheme = (theme: 'light' | 'dark') => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };
  const toggle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next: 'light' | 'dark' = isDark ? 'light' : 'dark';
    setTheme(next);
  };
  const isDark = () => document.documentElement.classList.contains('dark');
  return { isDark: isDark(), toggle, setTheme };
}
