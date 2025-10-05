export default function Instructions() {
  return (
    <section className="ui-card p-4 md:sticky md:top-6">
      <h3 className="mb-2 text-lg font-semibold text-slate-800">How to use</h3>
      <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm text-slate-700">
        <li>
          Choose a <strong>Room type</strong>: Square or Circle.
        </li>
        <li>
          Set dimensions/radius and the <strong>start position</strong>.
        </li>
        <li>
          Select the <strong>language</strong>: Swedish (V,H,G) or English
          (L,R,F).
        </li>
        <li>
          Type your <strong>commands</strong> and hit <em>Run</em>.
        </li>
        <li>
          After running, the robot appears at the{" "}
          <strong>final coordinate</strong> (🤖) with a{" "}
          <span className="pill ml-1 bg-emerald-100 text-emerald-700">
            green arrow
          </span>
          &nbsp;pointing its direction.
        </li>
        <li>
          The <span className="pill bg-rose-100 text-rose-700">red path</span>{" "}
          shows the steps taken.
        </li>
        <li>
          The{" "}
          <span className="pill bg-emerald-100 text-emerald-700">
            green dot
          </span>{" "}
          is the start.
        </li>
        <li>
          <strong>Coordinate system:</strong> Uses the{" "}
          <em>screen coordinate convention</em>. The origin (0,0) depends on the
          room type:
          <ul className="list-disc ml-6 mt-1">
            <li>
              For{" "}
              <span className="pill bg-brand-sky/10 text-brand-sky">
                Square
              </span>{" "}
              rooms, (0,0) is the <strong>top-left corner</strong>.
            </li>
            <li>
              For{" "}
              <span className="pill bg-brand-magenta/10 text-brand-magenta">
                Circle
              </span>{" "}
              rooms, (0,0) is the <strong>center of the room</strong>.
            </li>
          </ul>
          <div className="mt-1 text-slate-600 text-sm">
            <code className="font-mono">x</code> increases to the right and{" "}
            <code className="font-mono">y</code> increases downward (as in
            screen coordinates).
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Reference:{" "}
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/2D_computer_graphics%23:~:text%3DIf%2520a%2520standard%2520right%252Dhanded%2520Cartesian%2520coordinate%2520system,the%2520y%252Daxis%2520down%2520the%2520screen%2520or%2520page.&ved=2ahUKEwjvyKe12oqQAxXlSPEDHeXqMyQQ-NANegQIHhAC&usg=AOvVaw2kB-gnmesjOEQHu_-Rh7Nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-purple hover:underline"
            >
              Wikipedia — 2D Computer Graphics (Screen Coordinates)
            </a>
          </div>
        </li>
      </ol>

      <h4 className="mb-1 text-sm font-semibold text-slate-800">Rules</h4>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
        <li>
          Turns: <code className="font-mono">V/H</code> or{" "}
          <code className="font-mono">L/R</code>.
        </li>
        <li>
          Forward: <code className="font-mono">G</code> or{" "}
          <code className="font-mono">F</code>.
        </li>
        <li>
          Invalid chars are{" "}
          <span className="pill bg-slate-100 text-slate-700">ignored</span>.
        </li>
        <li>
          If a forward hits the wall, it’s a{" "}
          <span className="pill bg-amber-100 text-amber-800">bump</span> and the
          robot stays.
        </li>
      </ul>

      <div className="rounded-lg border border-brand-purple/20 bg-brand-purple/5 p-3">
        <div className="mb-1 text-sm font-semibold text-brand-purple">
          Examples
        </div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="pill bg-brand-sky/10 text-brand-sky mr-2">
              Square
            </span>
            <code className="font-mono">HGHGGHGHG</code> →{" "}
            <span className="font-mono">1 3 N</span>
          </div>
          <div>
            <span className="pill bg-brand-magenta/10 text-brand-magenta mr-2">
              Circle
            </span>
            <code className="font-mono">RRFLFFLRF</code> →{" "}
            <span className="font-mono">3 1 Ö</span>
          </div>
        </div>
      </div>
    </section>
  );
}
