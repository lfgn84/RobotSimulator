import { test, expect } from "@playwright/test";

test("UI Example 2 produces result 3 1 Ö", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("ex2").click();
  await page.getByTestId("run").click();
  await expect(page.getByTestId("result")).toHaveText(/3 1 .*Ö/);
});
