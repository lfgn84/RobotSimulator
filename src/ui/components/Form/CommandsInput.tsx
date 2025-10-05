type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function CommandsInput({ value, onChange }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-600">Commands</span>
      <input
        data-testid="commands"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="V,H,G (sv) or L,R,F (en)"
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
      />
      <p className="text-xs text-slate-500">
        Examples: <code className="font-mono">HGHGGHGHG</code> ·{" "}
        <code className="font-mono">RRFLFFLRF</code>
      </p>
    </label>
  );
}
