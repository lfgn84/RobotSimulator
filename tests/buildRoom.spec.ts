import { test, expect } from "@playwright/test";
import { buildRoom } from "../src/app/validators";

test("buildRoom: square clamps and floors width/height", () => {
  const r = buildRoom("square", 4.9, 0, 0);
  expect(r).toEqual({ kind: "square", width: 4, height: 1 });
});

test("buildRoom: circle clamps and floors radius", () => {
  const r = buildRoom("circle", 0, 0, 9.8);
  expect(r).toEqual({ kind: "circle", radius: 9 });
});
