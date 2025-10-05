import type { Language, Command } from "./commands";
import { parseCommands } from "./commands";
import type { Direction, Point } from "./direction";
import { turn, step } from "./direction";
import type { Room } from "./room";
import { contains } from "./room";

export type RobotState = { pos: Point; dir: Direction };

export type SimulationOptions = {
  trace?: boolean; // if true, return the path
};

export type SimulationResult = {
  state: RobotState;
  ignored: string[];
  bumps: number;
  path?: Point[]; // visited positions (includes start)
  cmds?: Command[]; // executed commands (useful for animation)
};

/**
 * Runs the simulation. Initial direction = 'N'.
 * Rules: turns always apply; FORWARD only if the new position falls within the room.
 */
export function runRobot(
  room: Room,
  start: Point,
  lang: Language,
  rawCommands: string,
  startDir: Direction = "N",
  opts: SimulationOptions = {},
): SimulationResult {
  if (!contains(room, start)) {
    throw new Error("Start position is outside the room.");
  }

  const { commands, ignored } = parseCommands(rawCommands, lang);
  let state: RobotState = { pos: { ...start }, dir: startDir };
  let bumps = 0;

  // path starts with the initial point (defensive copy)
  const path: Point[] = opts.trace ? [{ ...start }] : [];

  for (const cmd of commands) {
    if (cmd === "LEFT" || cmd === "RIGHT") {
      state = { ...state, dir: turn(state.dir, cmd) };
    } else {
      const next = step(state.pos, state.dir);
      if (contains(room, next)) {
        state = { ...state, pos: next };
        if (opts.trace) {
          // push a NEW reference on each valid advance
          path.push({ x: next.x, y: next.y });
        }
      } else {
        bumps += 1; // ignore advance outside the room
      }
    }
  }

  return {
    state,
    ignored,
    bumps,
    path: opts.trace ? path : undefined,
    cmds: opts.trace ? commands : undefined,
  };
}

/** Output format: "x y D" (D in Swedish letters N/Ö/S/V). */
export function formatResult(res: SimulationResult): string {
  const { x, y } = res.state.pos;
  return `${x} ${y} ${res.state.dir}`;
}
