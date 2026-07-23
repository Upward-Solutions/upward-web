import PerfilAltimetria from './PerfilAltimetria.jsx'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={`block ${s.hero}`}>
      <div className="wrap">
        <p className="eyebrow">Desarrollo a medida · Web y mobile</p>

        <h1 className={s.title}>
          Diseñamos el sistema <span className={s.rise}>con vos</span>. Después lo construimos.
        </h1>

        <p className={`lead ${s.sub}`}>
          Desarrollo asistido por IA: sale menos y sale antes. Y del otro lado hay un equipo que
          discute el producto, no solo el código.
        </p>

        <div className={s.actions}>
          <a className="btn btn--primary" href="#contacto">
            Contanos tu proyecto <span className="arw">↗</span>
          </a>
          <a className="btn btn--ghost" href="#metodo">
            Cómo trabajamos
          </a>
        </div>

        <p className={s.note}>Desde una landing hasta un sistema de gestión. Sin mínimo de tamaño.</p>
      </div>

      <PerfilAltimetria />
    </section>
  )
}
