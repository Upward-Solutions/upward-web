import s from './Contornos.module.css'

/* Curvas de nivel de fondo para las secciones oscuras.
   flip invierte el dibujo para que las dos secciones no sean idénticas. */
export default function Contornos({ flip = false }) {
  return (
    <svg
      className={s.contours}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M-50,640 C 200,600 380,660 620,580 C 840,506 1000,560 1250,480" />
      <path d="M-50,560 C 200,520 380,580 620,500 C 840,426 1000,480 1250,400" />
      <path d="M-50,480 C 200,440 380,500 620,420 C 840,346 1000,400 1250,320" />
      <path d="M-50,400 C 200,360 380,420 620,340 C 840,266 1000,320 1250,240" />
      <path d="M-50,320 C 200,280 380,340 620,260 C 840,186 1000,240 1250,160" />
      <path d="M-50,240 C 200,200 380,260 620,180 C 840,106 1000,160 1250,80" />
    </svg>
  )
}
