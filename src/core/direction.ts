// Directions in Swedish: N (North), Ö (East), S (South), V (West)
export type Direction = "N" | "Ö" | "S" | "V";
export type Turn = "LEFT" | "RIGHT";

export const ORDER: Direction[] = ["N", "Ö", "S", "V"]; // clockwise cycle

export type Point = { x: number; y: number };

/** Applies a LEFT/RIGHT turn maintaining the cycle N→Ö→S→V. */
export function turn(dir: Direction, rotation: Turn): Direction {
  const i = ORDER.indexOf(dir);
  const delta = rotation === "RIGHT" ? 1 : -1;
  return ORDER[(i + delta + ORDER.length) % ORDER.length];
}

/** Moves 1 unit in the current direction (does not validate room limits). */
export function step(p: Point, dir: Direction): Point {
  switch (dir) {
    case "N":
      return { x: p.x, y: p.y - 1 };
    case "Ö":
      return { x: p.x + 1, y: p.y };
    case "S":
      return { x: p.x, y: p.y + 1 };
    case "V":
      return { x: p.x - 1, y: p.y };
  }
}
