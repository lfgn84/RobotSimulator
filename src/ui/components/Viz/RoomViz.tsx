import type { JSX } from "react";
import { COLORS } from "../../../app/config";
import type { Room } from "../../../core/room";
import type { Point, Direction } from "../../../core/direction";

type Props = {
  room: Room;
  path?: Point[];
  tile?: number;
  finalDir?: Direction;
};

export default function RoomViz({
  room,
  path = [],
  tile = 32,
  finalDir,
}: Props) {
  // bounds
  let minX = 0,
    minY = 0,
    maxX = 0,
    maxY = 0,
    isCircle = false,
    radius = 0;
  if (room.kind === "square") {
    minX = 0;
    minY = 0;
    maxX = room.width - 1;
    maxY = room.height - 1;
  } else {
    isCircle = true;
    radius = room.radius;
    minX = -radius;
    maxX = radius;
    minY = -radius;
    maxY = radius;
  }

  // layout
  const pad = 16;
  const cellsX = maxX - minX + 1,
    cellsY = maxY - minY + 1;
  const w = cellsX * tile + pad * 2,
    h = cellsY * tile + pad * 2;

  // mapping (screen)
  const sx = (x: number) => (x - minX) * tile + pad;
  const sy = (y: number) => (y - minY) * tile + pad;

  // grid
  const gridLines: JSX.Element[] = [];
  for (let x = minX; x <= maxX; x++)
    gridLines.push(
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
    gridLines.push(
      <line
        key={`hz${y}`}
        x1={sx(minX)}
        y1={sy(y)}
        x2={sx(maxX)}
        y2={sy(y)}
        stroke={COLORS.grid}
      />,
    );

  // room shape
  const roomShape = isCircle ? (
    <circle
      cx={sx(0)}
      cy={sy(0)}
      r={radius * tile}
      fill="none"
      stroke={COLORS.border}
      strokeWidth={2}
    />
  ) : (
    <rect
      x={sx(minX)}
      y={sy(minY)}
      width={cellsX * tile}
      height={cellsY * tile}
      fill="none"
      stroke={COLORS.border}
      strokeWidth={2}
      rx={8}
    />
  );

  // path segments + dots
  const segments: JSX.Element[] = [];
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1],
      b = path[i];
    segments.push(
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

  // robot + arrow to the right
  const last = path[path.length - 1];
  const DIR_ARROW: Record<Direction, string> = {
    N: "▲",
    Ö: "▶",
    S: "▼",
    V: "◀",
  };

  const robotEmoji = last ? (
    <text
      x={sx(last.x)}
      y={sy(last.y)}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={tile * 0.7}
    >
      🤖
    </text>
  ) : null;

  const robotDirMark =
    last && finalDir ? (
      <text
        x={sx(last.x) + tile * 0.6}
        y={sy(last.y)}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={Math.floor(tile * 0.5)}
        fill={COLORS.directionArrow}
      >
        {DIR_ARROW[finalDir]}
      </text>
    ) : null;

  // origin cross: small crosshair at origin
  const origin = isCircle ? { x: 0, y: 0 } : { x: 0, y: 0 };
  const crossSize = tile * 0.2; // size proportional to tile
  const originCross = (
    <g stroke="#0f172a" strokeWidth={1.5} opacity={0.8}>
      <line
        x1={sx(origin.x) - crossSize}
        y1={sy(origin.y)}
        x2={sx(origin.x) + crossSize}
        y2={sy(origin.y)}
      />
      <line
        x1={sx(origin.x)}
        y1={sy(origin.y) - crossSize}
        x2={sx(origin.x)}
        y2={sy(origin.y) + crossSize}
      />
    </g>
  );

  return (
    <svg className="w-full" height={h} viewBox={`0 0 ${w} ${h}`}>
      {gridLines}
      {roomShape}
      {originCross}
      {segments}
      {dots}
      {robotEmoji}
      {robotDirMark}
    </svg>
  );
}
