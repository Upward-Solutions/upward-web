import useReveal from '../hooks/useReveal.js'
import s from './Servicios.module.css'

const SERVICIOS = [
  {
    tag: 'Presencia',
    titulo: 'Landings y sitios institucionales',
    texto: 'Rápidos, medibles y editables por vos. Pensados para convertir, no solo para estar.',
  },
  {
    tag: 'Producto',
    titulo: 'Aplicaciones web',
    texto: 'Plataformas con usuarios, roles, pagos e integraciones. De MVP a producto en uso.',
  },
  {
    tag: 'Operación',
    titulo: 'Software de gestión',
    texto: 'Stock, turnos, facturación, back-office. El sistema que hoy es una planilla compartida.',
  },
  {
    tag: 'Mobile',
    titulo: 'Apps iOS y Android',
    texto: 'Una sola base de código para las dos tiendas, con la web como parte del mismo sistema.',
  },
  {
    tag: 'Automatización',
    titulo: 'Integraciones y procesos',
    texto: 'Conectamos lo que ya usás y le sacamos de encima al equipo el trabajo manual repetido.',
  },
]

export default function Servicios() {
  const ref = useReveal()

  return (
    <section className="block" id="construimos">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Qué construimos</p>
        <h2>Cualquier tamaño, cualquier rubro.</h2>

        <div className={s.cards}>
          {SERVICIOS.map((item) => (
            <article className={s.card} key={item.titulo}>
              <span className={s.tag}>{item.tag}</span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>

        <p className={s.note}>
          ¿Tu caso no entra en ninguna casilla? Suele ser buena señal. Escribinos igual.
        </p>
      </div>
    </section>
  )
}
