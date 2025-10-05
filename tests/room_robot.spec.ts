import { test, expect } from '@playwright/test';
import { contains } from '../src/core/room';
import { runRobot, formatResult } from '../src/core/robot';

test('"contains" works for square (0-based, border included/excluded)', () => {
  const square = { kind: 'square', width: 5, height: 5 } as const;
  expect(contains(square, { x: 0, y: 0 })).toBe(true);
  expect(contains(square, { x: 4, y: 4 })).toBe(true);
  expect(contains(square, { x: 5, y: 0 })).toBe(true);
  expect(contains(square, { x: 0, y: 5 })).toBe(true);
   expect(contains(square, { x: 6, y: 0 })).toBe(false);
  expect(contains(square, { x: 0, y: 6 })).toBe(false);
});

test('"contains" works for circle centered at origin (boundary included)', () => {
  const circle = { kind: 'circle', radius: 2 } as const;
  expect(contains(circle, { x: 0, y: 0 })).toBe(true);
  expect(contains(circle, { x: 2, y: 0 })).toBe(true);  
  expect(contains(circle, { x: 3, y: 3 })).toBe(false);
});
  
test('Example 1 (Square 5x5, start 1,2, commmands SV "HGHGGHGHG") => "1 3 N"', () => {
  const square = { kind: 'square', width: 5, height: 5 } as const;
  const res = runRobot(square, { x: 1, y: 2 }, 'sv', 'HGHGGHGHG');
  expect(formatResult(res)).toBe('1 3 N');
});

test('Example 2 (Circle r=10, start 0,0, commands EN "RRFLFFLRF") => "3 1 Ö"', () => {
  const circle = { kind: 'circle', radius: 10 } as const;
  const res = runRobot(circle, { x: 0, y: 0 }, 'en', 'RRFLFFLRF');
  expect(formatResult(res)).toBe('3 1 Ö');
});

