import { test, expect } from "@playwright/test";
import { contains } from "../src/core/room";

test("square room includes 0,0 and excludes outer border", () => {
  const sq = { kind: "square" as const, width: 5, height: 5 };
  expect(contains(sq, { x: 0, y: 0 })).toBe(true);
  expect(contains(sq, { x: 4, y: 4 })).toBe(true);
  expect(contains(sq, { x: 5, y: 0 })).toBe(false);
  expect(contains(sq, { x: 0, y: 5 })).toBe(false);
});

test("circle room includes border points (distance <= radius)", () => {
  const c = { kind: "circle" as const, radius: 3 };
  expect(contains(c, { x: 0, y: 3 })).toBe(true); // on the border
  expect(contains(c, { x: 3, y: 0 })).toBe(true);
  expect(contains(c, { x: 3, y: 1 })).toBe(false); // outside
});
