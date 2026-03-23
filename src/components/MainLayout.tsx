import { useState } from "react";
import Board from "./Board";
import TitleComponent from "./TitleComponent";

export default function MainLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-6 transition-colors">
        <div className="max-w-6xl mx-auto">
          <TitleComponent isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
          <Board />
        </div>
      </div>
    </div>
  );
}
