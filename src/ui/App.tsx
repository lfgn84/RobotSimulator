import RoomViz from "./components/Viz/RoomViz";
import Compass from "./components/Viz/Compass";
import RoomTypeSelect from "./components/Form/RoomTypeSelect";
import SquareFields from "./components/Form/SquareFields";
import CircleFields from "./components/Form/CircleFields";
import StartFields from "./components/Form/StartFields";
import LanguageSelect from "./components/Form/LanguageSelect";
import CommandsInput from "./components/Form/CommandsInput";
import ActionsBar from "./components/Form/ActionsBar";
import { useRobotForm } from "./hooks/useRobotForm";
import Instructions from "./components/Info/Instructions";

export default function App() {
  const form = useRobotForm();

  return (
    <div className="app-canvas mt-5">
      <header className="mb-6">
        <h1 className="title-display text-[clamp(2rem,4vw,3rem)] drop-shadow-sm">
          Robot Simulator
        </h1>
      </header>

      {/* Content grid */}
      <div className="grid gap-6">
        <main className="space-y-6">
          {/* FORM */}
          <section className="ui-card bg-brand-sky/10 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <RoomTypeSelect
                value={form.roomType}
                onChange={form.setRoomType}
              />
              <LanguageSelect value={form.lang} onChange={form.setLang} />
            </div>

            <div className="mt-4">
              {form.roomType === "square" ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <SquareFields
                    width={form.width}
                    height={form.height}
                    onWidth={form.setWidth}
                    onHeight={form.setHeight}
                  />
                </div>
              ) : (
                <CircleFields radius={form.radius} onRadius={form.setRadius} />
              )}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <StartFields
                x={form.startX}
                y={form.startY}
                onX={form.setStartX}
                onY={form.setStartY}
              />
              <CommandsInput
                value={form.commands}
                onChange={form.setCommands}
              />
            </div>

            <div className="mt-5">
              <ActionsBar
                onRun={form.run}
                onReset={form.reset}
                onEx1={form.loadExample1}
                onEx2={form.loadExample2}
              />
            </div>
          </section>

          {/* RESULT */}
          <section className="ui-card p-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-sm font-semibold text-slate-700">
                Result:
              </div>
              <div
                data-testid="result"
                className="rounded-md bg-slate-50 px-2 py-1 font-mono text-slate-900"
              >
                {form.result || "—"}
              </div>

              {form.bumps > 0 && (
                <div
                  data-testid="bumps"
                  className="pill ml-auto bg-brand-yellow/20 text-amber-800"
                >
                  Bumps: {form.bumps}
                </div>
              )}
            </div>

            {form.ignored.length > 0 && (
              <div
                data-testid="warnings"
                className="mt-3 text-sm text-slate-600"
              >
                <span className="font-semibold">Warnings:</span> ignored
                characters: [{Array.from(new Set(form.ignored)).join(", ")}]
              </div>
            )}

            {form.error && (
              <div
                data-testid="error"
                className="mt-3 rounded-md border border-rose-200 bg-rose-50 p-2 text-rose-700"
              >
                <span className="font-semibold">Error:</span> {form.error}
              </div>
            )}
          </section>

          {/* VIZ */}
          {form.roomSnapshot && (
            <section className="ui-card p-5">
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                Visualization <Compass />
              </h2>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <RoomViz
                  room={form.roomSnapshot}
                  path={form.path}
                  finalDir={form.finalDir ?? undefined}
                  tile={36}
                />
              </div>
            </section>
          )}
        </main>

        <div>
          <Instructions />
        </div>
      </div>
    </div>
  );
}
