
import ThemeToggle from "./ThemeToggle";

type Props = {
  isDark: boolean;
  onToggle: () => void;
};

export default function TitleComponent({ isDark, onToggle }: Props) {
  return (
    <div className="flex items-center justify-center py-8 gap-4">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
        Kanban MiniApp
      </h1>
      <ThemeToggle isDark={isDark} onToggle={onToggle} />
    </div>
  )
}
