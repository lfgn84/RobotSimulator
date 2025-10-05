import type { Point } from "./direction";

export type SquareRoom = { kind: "square"; width: number; height: number };
export type CircleRoom = { kind: "circle"; radius: number };
export type Room = SquareRoom | CircleRoom;

/** Returns true if the point is inside the room. */
export function contains(room: Room, p: Point): boolean {
  if (room.kind === "square") {
    return p.x >= 0 && p.y >= 0 && p.x < room.width && p.y < room.height;
  }
  // circle centered at (0,0): includes the border
  return p.x * p.x + p.y * p.y <= room.radius * room.radius;
}
