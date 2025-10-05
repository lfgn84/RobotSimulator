// tests/path.spec.ts
import { test, expect } from '@playwright/test';
import { runRobot, formatResult } from '../src/core/robot';

test('trace collects positions for example 1', () => {
  const room = { kind: 'square', width: 5, height: 5 } as const;
  const res = runRobot(room, { x: 1, y: 2 }, 'sv', 'HGHGGHGHG', 'N', { trace: true });
  expect(formatResult(res)).toBe('1 3 N');
  expect(res.path && res.path.length).toBeGreaterThan(1);     // more than just the start
  expect(res.path?.[0]).toEqual({ x: 1, y: 2 });              // start
  expect(res.path?.[res.path.length - 1]).toEqual({ x: 1, y: 3 }); // final
});
