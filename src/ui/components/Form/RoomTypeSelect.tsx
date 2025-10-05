type Props = {
  value: "square" | "circle";
  onChange: (v: "square" | "circle") => void;
};

export default function RoomTypeSelect({ value, onChange }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-600">Room type</span>
      <select
        data-testid="room-type"
        value={value}
        onChange={(e) => onChange(e.target.value as "square" | "circle")}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
    </label>
  );
}
