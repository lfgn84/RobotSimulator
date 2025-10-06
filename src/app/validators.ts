import type { Room } from "../core/room";
import type { Point } from "../core/direction";

export function buildRoom(
  kind: "square" | "circle",
  width: number,
  height: number,
  radius: number,
): Room {
  if (kind === "square") {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    return { kind: "square", width: w, height: h };
  } else {
    const r = Math.max(1, Math.floor(radius));
    return { kind: "circle", radius: r };
  }
}

export function validateStart(room: Room, p: Point): string | null {
  if (room.kind === "square") {
    const ok = p.x >= 0 && p.y >= 0 && p.x <= room.width && p.y <= room.height;
    return ok
      ? null
      : `Start must be within x: 0 to ${room.width} and  y: 0 to ${room.height}`;
  } else {
    const ok = p.x * p.x + p.y * p.y <= room.radius * room.radius;
    return ok
      ? null
      : `Start X and Start Y must be inside circle (radius ${room.radius}).`;
  }
}
