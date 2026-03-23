import { useState } from "react";
import Board from "./Board";
import TitleComponent from "./TitleComponent";

export default function MainLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-6 transition-colors flex flex-col">
        <div className="max-w-6xl mx-auto flex-1">
          <TitleComponent isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
          <Board />
        </div>
        <footer className="text-center py-4 text-sm text-zinc-500 dark:text-zinc-400">
          Developed by Osen
        </footer>
      </div>
    </div>
  );
}
