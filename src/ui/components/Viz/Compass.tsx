export default function Compass() {
  return (
    <svg
      viewBox="0 0 90 80"
      className="w-14 h-14 ml-3 text-slate-700 inline-block align-middle"
    >
      {/* Labels */}
      <text
        x="45"
        y="10"
        textAnchor="middle"
        fontSize="12"
        fill="currentColor"
        fontWeight="600"
      >
        N
      </text>
      <text x="77" y="43" fontSize="12" fill="currentColor" fontWeight="600">
        E
      </text>
      <text
        x="45"
        y="80"
        textAnchor="middle"
        fontSize="12"
        fill="currentColor"
        fontWeight="600"
      >
        S
      </text>
      <text
        x="15" // moved further right
        y="43"
        textAnchor="end"
        fontSize="12"
        fill="currentColor"
        fontWeight="600"
      >
        W
      </text>

      {/* Cross lines */}
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <line x1="45" y1="16" x2="45" y2="68" />
        <line x1="20" y1="40" x2="70" y2="40" />
      </g>
    </svg>
  );
}
