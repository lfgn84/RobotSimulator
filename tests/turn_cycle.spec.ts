import { test, expect } from "@playwright/test";
import { turn } from "../src/core/direction";

test("turning RIGHT four times returns to North", () => {
  let d: any = "N";
  d = turn(d, "RIGHT"); // East
  d = turn(d, "RIGHT"); // South
  d = turn(d, "RIGHT"); // West
  d = turn(d, "RIGHT"); // Back to North
  expect(d).toBe("N");
});

test("turning LEFT four times also returns to North", () => {
  let d: any = "N";
  for (let i = 0; i < 4; i++) d = turn(d, "LEFT");
  expect(d).toBe("N");
});
