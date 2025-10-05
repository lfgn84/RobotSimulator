type Props = {
  value: "sv" | "en";
  onChange: (v: "sv" | "en") => void;
};

export default function LanguageSelect({ value, onChange }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-600">Language</span>
      <select
        data-testid="lang"
        value={value}
        onChange={(e) => onChange(e.target.value as "sv" | "en")}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <option value="sv">Swedish (V,H,G)</option>
        <option value="en">English (L,R,F)</option>
      </select>
    </label>
  );
}
