import type { Room } from "../core/room";

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
