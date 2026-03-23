type Props = {
  title?: string;
  description: string;
}

export default function Description({ title = "Description", description }: Props) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700">
      <span className="inline-block bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
        {title}
      </span>
      <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">{description}</p>
    </div>
  )
}
