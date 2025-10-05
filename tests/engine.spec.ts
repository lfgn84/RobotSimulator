import { test, expect } from '@playwright/test';
import { ORDER, turn, step, type Direction } from '../src/core/direction';
import { parseCommands } from '../src/core/commands';

test('turn cycles right and left', () => {
  // N -> RIGHT -> Ö -> RIGHT -> S
  expect(turn('N', 'RIGHT')).toBe('Ö');
  expect(turn('Ö', 'RIGHT')).toBe('S');
  // S -> LEFT -> Ö -> LEFT -> N
  expect(turn('S', 'LEFT')).toBe('Ö');
  expect(turn('Ö', 'LEFT')).toBe('N');
  // complete cycle
  let d: Direction = 'N';
  for (let i = 0; i < 4; i++) {
    d = turn(d, 'RIGHT');
  }
  expect(d).toBe('N');
});

test('step moves one unit by direction', () => {
  expect(step({ x: 0, y: 0 }, 'N')).toEqual({ x: 0, y: -1 });
  expect(step({ x: 0, y: 0 }, 'Ö')).toEqual({ x: 1, y: 0 });
  expect(step({ x: 0, y: 0 }, 'S')).toEqual({ x: 0, y: 1 });
  expect(step({ x: 0, y: 0 }, 'V')).toEqual({ x: -1, y: 0 });
});

test('parseCommands works for Swedish and English and ignores junk', () => {
  const sv = parseCommands('H G X V  g', 'sv');
  expect(sv.commands).toEqual(['RIGHT', 'FORWARD', 'LEFT', 'FORWARD']);
  expect(sv.ignored).toEqual(['X']);

  const en = parseCommands('R F ? L f', 'en');
  expect(en.commands).toEqual(['RIGHT', 'FORWARD', 'LEFT', 'FORWARD']);
  expect(en.ignored).toEqual(['?']);
});
