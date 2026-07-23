import useReveal from '../hooks/useReveal.js'
import s from './Proceso.module.css'

const ETAPAS = [
  {
    titulo: 'Charla inicial',
    texto: 'Media hora. Contanos el problema, no la solución. Sin costo y sin compromiso.',
  },
  {
    titulo: 'Diseño del sistema',
    texto: 'Definimos flujos, alcance y qué queda afuera de la primera versión.',
  },
  {
    titulo: 'Plan y presupuesto',
    texto: 'Precio cerrado por etapa, con fechas. Sabés qué recibís y cuándo.',
  },
  {
    titulo: 'Construcción',
    texto: 'Entregas parciales que podés usar. Revisás sobre algo real, no sobre un documento.',
  },
  {
    titulo: 'Salida y evolución',
    texto: 'Publicamos, medimos y decidimos con datos qué se construye después.',
  },
]

export default function Proceso() {
  const ref = useReveal()

  return (
    <section className="block block--tight" id="proceso">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">El recorrido</p>
        <h2>Cinco etapas, siempre en el mismo orden.</h2>

        <div className={s.steps}>
          {ETAPAS.map((e, i) => (
            <div className={s.step} key={e.titulo}>
              <span className={s.rung} />
              <span className={s.n}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
