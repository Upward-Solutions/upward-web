import s from './PerfilAltimetria.module.css'

/* Firma visual de la marca: el perfil de ascenso que se dibuja al cargar.
   Los hitos de abajo se editan acá. */
const HITOS = [
  { x: 0, y: 205, label: 'Charla inicial', color: 'var(--teal)', anchor: 'start', dx: 6, delay: '1.9s' },
  { x: 570, y: 118, label: 'Primera versión', color: 'var(--amber)', anchor: 'middle', dx: -30, delay: '2.15s' },
  { x: 1200, y: 6, label: 'En producción', color: 'var(--orange)', anchor: 'end', dx: 0, delay: '2.4s' },
]

const RIDGE =
  'M0,205 C 90,200 150,192 210,180 C 285,165 330,178 390,156 C 460,132 510,148 570,118 ' +
  'C 650,80 700,102 770,72 C 850,38 910,50 990,28 C 1070,8 1140,16 1200,6'

export default function PerfilAltimetria() {
  return (
    <div className={`wrap ${s.profile}`}>
      <svg viewBox="0 0 1200 240" role="img" aria-label="Perfil de ascenso: de la idea a un producto funcionando">
        <defs>
          <linearGradient id="ramp" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--teal)" />
            <stop offset="58%" stopColor="var(--amber)" />
            <stop offset="100%" stopColor="var(--orange)" />
          </linearGradient>
          <linearGradient id="rampSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--orange)" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <line className={s.gridLine} x1="0" y1="220" x2="1200" y2="220" />
        <path className={s.ridgeFill} d={`${RIDGE} L1200,220 L0,220 Z`} />
        <path className={s.ridge} d={RIDGE} />

        {HITOS.map((h) => (
          <g key={h.label} className={s.wp} style={{ animationDelay: h.delay }}>
            <circle cx={h.x} cy={h.y} r="6" stroke={h.color} />
            <text x={h.x + h.dx} y="234" textAnchor={h.anchor}>
              {h.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
