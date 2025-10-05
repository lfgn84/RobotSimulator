import { COLORS } from "../../../app/config";

type Props = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  sx: (x: number) => number;
  sy: (y: number) => number;
};

export default function Grid({ minX, minY, maxX, maxY, sx, sy }: Props) {
  const lines = [];
  for (let x = minX; x <= maxX; x++)
    lines.push(
      <line
        key={`vx${x}`}
        x1={sx(x)}
        y1={sy(minY)}
        x2={sx(x)}
        y2={sy(maxY)}
        stroke={COLORS.grid}
      />,
    );
  for (let y = minY; y <= maxY; y++)
    lines.push(
      <line
        key={`hz${y}`}
        x1={sx(minX)}
        y1={sy(y)}
        x2={sx(maxX)}
        y2={sy(y)}
        stroke={COLORS.grid}
      />,
    );
  return <>{lines}</>;
}
