import { test, expect } from '@playwright/test';
import { validateStart } from '../src/app/validators';

test('square: rejects negative start', () => {
  const room = { kind: 'square', width: 3, height: 3 } as const;
  expect(validateStart(room, { x: -1, y: 0 })).toBeTruthy();
  expect(validateStart(room, { x: 0, y: -2 })).toBeTruthy();
  expect(validateStart(room, { x: 0, y: 0 })).toBeNull();
  expect(validateStart(room, { x: 3, y: 3 })).toBeNull(); // border included
});

test('circle: allows negatives inside radius', () => {
  const room = { kind: 'circle', radius: 5 } as const;
  expect(validateStart(room, { x: -3, y: 4 })).toBeNull(); // inside
  expect(validateStart(room, { x: -6, y: 0 })).toBeTruthy(); // outside
});
