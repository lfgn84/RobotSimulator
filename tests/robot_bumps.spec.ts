import { test, expect } from "@playwright/test";
import { runRobot, formatResult } from "../src/core/robot";

test("robot bumps against the wall in a small square room", () => {
  const room = { kind: "square" as const, width: 2, height: 2 };

  // Try to move forward three times — will hit wall
  const res = runRobot(room, { x: 0, y: 0 }, "en", "FFF", "N", { trace: true });
  expect(res.bumps).toBeGreaterThan(0);

  // Now turn right and move inside the room
  const res2 = runRobot(room, { x: 0, y: 0 }, "en", "RFF", "N", { trace: true });
  expect(formatResult(res2)).toMatch(/^2 0 Ö|^2 0 E/); // depending on language
});

test("robot bumps when reaching border of a small circle", () => {
  const room = { kind: "circle" as const, radius: 1 };
  const res = runRobot(room, { x: 0, y: 0 }, "en", "FFFF", "N", { trace: true });
  expect(res.bumps).toBeGreaterThan(0);
});
