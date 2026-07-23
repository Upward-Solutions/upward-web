import Contornos from './Contornos.jsx'
import useReveal from '../hooks/useReveal.js'
import s from './Rol.module.css'

const CLAIMS = [
  {
    titulo: 'Primero el problema',
    texto:
      'Antes de hablar de pantallas entendemos qué tarea del negocio tiene que resolver el sistema y cómo se hace hoy.',
  },
  {
    titulo: 'Alcance con criterio',
    texto:
      'Definimos juntos la versión más chica que ya sirve. Lo demás queda anotado, no descartado.',
  },
  {
    titulo: 'Decisiones argumentadas',
    texto: 'Cada elección técnica viene con el motivo y con lo que resigna. Sin cajas negras.',
  },
  {
    titulo: 'El código es tuyo',
    texto: 'Repositorio a tu nombre desde el día uno. No quedás atado a nadie, tampoco a nosotros.',
  },
]

export default function Rol() {
  const ref = useReveal()

  return (
    <section className="dark block">
      <Contornos />
      <div className={`wrap reveal ${s.split}`} ref={ref}>
        <div>
          <p className="eyebrow">El rol</p>
          <h2>Mitad desarrolladores, mitad consultores de producto.</h2>
          <p className={`lead ${s.intro}`}>
            Vos conocés tu negocio mejor que nadie. Nosotros conocemos lo que pasa cuando ese negocio
            se convierte en software: dónde se rompe, qué se vuelve caro de mantener y qué
            funcionalidad nadie va a usar.
          </p>
          <a className={`btn btn--light ${s.cta}`} href="#contacto">
            Agendar una charla <span className="arw">↗</span>
          </a>
        </div>

        <div className={s.claims}>
          {CLAIMS.map((c) => (
            <div className={s.claim} key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
