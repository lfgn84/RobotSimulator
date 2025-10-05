type Props = {
  onRun: () => void;
  onReset: () => void;
  onEx1: () => void;
  onEx2: () => void;
};

export default function ActionsBar({ onRun, onReset, onEx1, onEx2 }: Props) {
  const base = "rounded-lg px-4 py-2 transition";
  return (
    <div className="flex flex-wrap gap-2">
      <button
        data-testid="run"
        onClick={onRun}
        className="rounded-lg bg-brand-purple px-4 py-2 text-white shadow-sm transition hover:brightness-110 active:brightness-95"
      >
        Run
      </button>
      <button
        data-testid="reset"
        onClick={onReset}
        type="button"
        className={`${base} border border-slate-300 hover:bg-slate-50`}
      >
        Reset
      </button>
      <button
        data-testid="ex1"
        onClick={onEx1}
        type="button"
        className={`${base} border border-slate-300 hover:bg-slate-50`}
      >
        Load Example 1
      </button>
      <button
        data-testid="ex2"
        onClick={onEx2}
        type="button"
        className={`${base} border border-slate-300 hover:bg-slate-50`}
      >
        Load Example 2
      </button>
    </div>
  );
}
