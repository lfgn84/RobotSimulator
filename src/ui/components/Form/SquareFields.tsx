type Props = {
  width: number;
  height: number;
  onWidth: (n: number) => void;
  onHeight: (n: number) => void;
};

export default function SquareFields({
  width,
  height,
  onWidth,
  onHeight,
}: Props) {
  return (
    <>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-600">Width</span>
        <input
          data-testid="width"
          type="number"
          min={1}
          value={width}
          onChange={(e) => onWidth(parseInt(e.target.value || "0", 10))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-600">Height</span>
        <input
          data-testid="height"
          type="number"
          min={1}
          value={height}
          onChange={(e) => onHeight(parseInt(e.target.value || "0", 10))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>
    </>
  );
}
