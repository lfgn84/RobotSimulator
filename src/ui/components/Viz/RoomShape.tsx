import { COLORS } from "../../../app/config";

type Props = {
  kind: "square" | "circle";
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  radius?: number;
  tile: number;
  sx: (n: number) => number;
  sy: (n: number) => number;
};

export default function RoomShape({
  kind,
  minX,
  minY,
  maxX,
  maxY,
  radius = 0,
  tile,
  sx,
  sy,
}: Props) {
  if (kind === "circle") {
    return (
      <circle
        cx={sx(0)}
        cy={sy(0)}
        r={radius * tile}
        fill="none"
        stroke={COLORS.border}
        strokeWidth={2}
      />
    );
  }
  const width = (maxX - minX + 1) * tile,
    height = (maxY - minY + 1) * tile;
  return (
    <rect
      x={sx(minX)}
      y={sy(minY)}
      width={width}
      height={height}
      fill="none"
      stroke={COLORS.border}
      strokeWidth={2}
      rx={8}
    />
  );
}
