import { useState, useCallback } from "react";
import { buildRoom, validateStart } from "../../app/validators";
import { APP, DEFAULTS } from "../../app/config";
import { contains, type Room } from "../../core/room";
import {
  runRobot,
  formatResult,
  type SimulationResult,
} from "../../core/robot";

export type RoomType = "square" | "circle";
export type Language = "sv" | "en";

type UseRobotFormState = {
  // form fields
  roomType: RoomType;
  width: number;
  height: number;
  radius: number;
  startX: number;
  startY: number;
  lang: Language;
  commands: string;

  // outputs
  result: string;
  ignored: string[];
  bumps: number;
  error: string;

  // viz
  path: { x: number; y: number }[];
  roomSnapshot: Room | null;
  finalDir: "N" | "Ö" | "S" | "V" | null;
};

type UseRobotFormActions = {
  // setters (simple)
  setRoomType: (v: RoomType) => void;
  setWidth: (n: number) => void;
  setHeight: (n: number) => void;
  setRadius: (n: number) => void;
  setStartX: (n: number) => void;
  setStartY: (n: number) => void;
  setLang: (v: Language) => void;
  setCommands: (v: string) => void;

  // main actions
  run: () => void;
  reset: () => void;
  loadExample1: () => void;
  loadExample2: () => void;
};

export function useRobotForm(): UseRobotFormState & UseRobotFormActions {
  // ---- form fields
  const [roomType, setRoomType] = useState<RoomType>("square");
  const [width, setWidth] = useState<number>(DEFAULTS.square.width);
  const [height, setHeight] = useState<number>(DEFAULTS.square.height);
  const [radius, setRadius] = useState<number>(DEFAULTS.circle.radius);
  const [startX, setStartX] = useState<number>(DEFAULTS.start.x);
  const [startY, setStartY] = useState<number>(DEFAULTS.start.y);
  const [lang, setLang] = useState<Language>(DEFAULTS.language);
  const [commands, setCommands] = useState<string>(DEFAULTS.commands);

  // ---- outputs
  const [result, setResult] = useState<string>("");
  const [ignored, setIgnored] = useState<string[]>([]);
  const [bumps, setBumps] = useState<number>(0);
  const [error, setError] = useState<string>("");

  // ---- viz
  const [path, setPath] = useState<{ x: number; y: number }[]>([]);
  const [roomSnapshot, setRoomSnapshot] = useState<Room | null>(null);
  const [finalDir, setFinalDir] = useState<"N" | "Ö" | "S" | "V" | null>(null);

  // ---- actions
  const reset = useCallback(() => {
    setRoomType("square");
    setWidth(5);
    setHeight(5);
    setRadius(10);
    setStartX(1);
    setStartY(2);
    setLang("en");
    setCommands("");

    setResult("");
    setIgnored([]);
    setBumps(0);
    setError("");
    setPath([]);
    setRoomSnapshot(null);
    setFinalDir(null);
  }, []);

  const loadExample1 = useCallback(() => {
    setRoomType("square");
    setWidth(5);
    setHeight(5);
    setStartX(1);
    setStartY(2);
    setLang(DEFAULTS.language);
    setCommands(DEFAULTS.commandsExample1);

    setResult("");
    setIgnored([]);
    setBumps(0);
    setError("");
    setPath([]);
    setRoomSnapshot(null);
    setFinalDir(null);
  }, []);

  const loadExample2 = useCallback(() => {
    setRoomType("circle");
    setRadius(DEFAULTS.circle.radius);
    setStartX(0);
    setStartY(0);
    setLang(DEFAULTS.english);
    setCommands(DEFAULTS.commandsExample2);

    setResult("");
    setIgnored([]);
    setBumps(0);
    setError("");
    setPath([]);
    setRoomSnapshot(null);
    setFinalDir(null);
  }, []);

  const run = useCallback(() => {
    try {
      setError("");
      const room = buildRoom(roomType, width, height, radius);
      const start = { x: startX, y: startY };

      const startErr = validateStart(room, start);
      if (startErr) {
        setResult("");
        setIgnored([]);
        setBumps(0);
        setPath([]);
        setRoomSnapshot(null);
        setError(startErr);
        return;
      }

      if (!contains(room, start)) {
        setResult("");
        setIgnored([]);
        setBumps(0);
        setPath([]);
        setRoomSnapshot(room); // still show the room
        setFinalDir(null);
        setError("Start position is outside the room.");
        return;
      }

      const result: SimulationResult = runRobot(
        room,
        start,
        lang,
        commands,
        "N",
        { trace: APP.showWarnings },
      );

      setResult(formatResult(result));
      setIgnored(result.ignored);
      setBumps(result.bumps);
      setPath(result.path ?? []);
      setRoomSnapshot(room);
      setFinalDir(result.state.dir);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unexpected error");
    }
  }, [roomType, width, height, radius, startX, startY, lang, commands]);

  return {
    // state
    roomType,
    width,
    height,
    radius,
    startX,
    startY,
    lang,
    commands,
    result,
    ignored,
    bumps,
    error,
    path,
    roomSnapshot,
    finalDir,
    // setters
    setRoomType,
    setWidth,
    setHeight,
    setRadius,
    setStartX,
    setStartY,
    setLang,
    setCommands,
    // actions
    run,
    reset,
    loadExample1,
    loadExample2,
  };
}
