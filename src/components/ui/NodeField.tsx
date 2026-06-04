/* Deterministic node network — echoes the connected dots in the
   Connexxion logo. Pure SVG + CSS (no JS animation) for performance. */

const nodes = [
  { x: 12, y: 22 }, { x: 28, y: 14 }, { x: 44, y: 30 }, { x: 62, y: 18 },
  { x: 78, y: 34 }, { x: 90, y: 20 }, { x: 20, y: 52 }, { x: 38, y: 64 },
  { x: 55, y: 50 }, { x: 72, y: 62 }, { x: 88, y: 54 }, { x: 30, y: 84 },
  { x: 50, y: 78 }, { x: 68, y: 88 }, { x: 84, y: 80 },
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [2, 8], [6, 7],
  [7, 8], [8, 9], [9, 10], [4, 10], [7, 11], [8, 12], [12, 13],
  [9, 13], [13, 14], [10, 14], [11, 12], [1, 8], [3, 8],
];

export function NodeField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <g stroke="#0fa659" strokeWidth="0.12" opacity="0.4">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 4 === 0 ? 0.8 : 0.45}
          fill="#1ec873"
          className="cnx-node"
          style={{ animationDelay: `${(i % 5) * 0.6}s` }}
        />
      ))}
    </svg>
  );
}
