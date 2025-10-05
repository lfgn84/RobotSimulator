import type { Point } from "../../../core/direction";
import { COLORS } from "../../../app/config";

type Props = {
  path: Point[];
  sx: (n: number) => number;
  sy: (n: number) => number;
};

export default function PathTrace({ path, sx, sy }: Props) {
  const segs = [];
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1],
      b = path[i];
    segs.push(
      <line
        key={`p${i}`}
        x1={sx(a.x)}
        y1={sy(a.y)}
        x2={sx(b.x)}
        y2={sy(b.y)}
        stroke={COLORS.path}
        strokeWidth={3}
        strokeLinecap="round"
      />,
    );
  }
  const dots = path.map((p, i) => (
    <circle
      key={`d${i}`}
      cx={sx(p.x)}
      cy={sy(p.y)}
      r={4}
      fill={i === 0 ? COLORS.start : COLORS.pathPoint}
    />
  ));
  return (
    <>
      {segs}
      {dots}
    </>
  );
}
