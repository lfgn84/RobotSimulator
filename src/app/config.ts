/** App-level configuration / constants. */
export const APP = {
  coordinateSystem: "screen" as const, // internal engine uses "screen"
  showWarnings: true,
};

export const DEFAULTS = {
  tileSize: 32,
  square: {
    width: 5,
    height: 5,
  },
  circle: {
    radius: 10,
  },
  start: {
    x: 1,
    y: 2,
    dir: "N" as const,
  },
  language: "sv" as const,
  english: "en" as const,
  commands: "HGHGGHGHG",
  commandsExample1: "HGHGGHGHG",
  commandsExample2: "RRFLFFLRF",
};

export const COLORS = {
  grid: "#e2e8f0",
  border: "#94a3b8",
  pathPoint: "#2563eb", // blue
  path: "#ef4444", // red
  start: "#22c55e", // green
  robot: "#6366f1", // indigo
  directionArrow: "#16a34a", // green
};
