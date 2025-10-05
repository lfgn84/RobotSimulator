import type { Direction, Point } from "../../../core/direction";
import { COLORS } from "../../../app/config";
const DIR_ARROW: Record<Direction, string> = {
  N: "▲",
  Ö: "▶",
  S: "▼",
  V: "◀",
};

type Props = {
  pos: Point;
  dir: Direction;
  sx: (n: number) => number;
  sy: (n: number) => number;
  tile: number;
};
export default function Robot({ pos, dir, sx, sy, tile }: Props) {
  return (
    <>
      <text
        x={sx(pos.x)}
        y={sy(pos.y)}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={tile * 0.7}
      >
        🤖
      </text>
      <text
        x={sx(pos.x) + tile * 0.6}
        y={sy(pos.y)}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fill={COLORS.directionArrow}
      >
        {DIR_ARROW[dir]}
      </text>
    </>
  );
}
