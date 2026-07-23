import useReveal from '../hooks/useReveal.js'
import s from './Faq.module.css'

const PREGUNTAS = [
  {
    q: '¿"Asistido por IA" significa que el código lo escribe un robot?',
    a: 'Significa que la parte repetitiva la hace una máquina y nosotros nos concentramos en las decisiones: arquitectura, modelo de datos, seguridad, experiencia de uso. Todo lo que entregamos está revisado por nosotros y respondemos por el resultado como si lo hubiéramos tipeado letra por letra.',
  },
  {
    q: '¿Por qué sale más barato que un estudio tradicional?',
    a: 'Porque el mismo trabajo lleva menos horas. No hay capas de gestión intermedias ni un equipo facturando reuniones: hay una conversación directa y una herramienta que acelera la construcción.',
  },
  {
    q: '¿Cuánto cuesta mi proyecto?',
    a: 'Depende del alcance, y el alcance recién queda claro después de la etapa de diseño. Por eso la charla inicial y la propuesta no se cobran: primero entendemos qué hay que hacer y después ponemos un número cerrado.',
  },
  {
    q: 'Ya tengo un equipo técnico. ¿Sirve igual?',
    a: 'Sí. En ese caso solemos entrar como consultores de producto o para acelerar un módulo puntual, trabajando con las herramientas y los estándares que ya tiene el equipo.',
  },
  {
    q: '¿Qué pasa después de la entrega?',
    a: 'Te queda el código, la documentación y los accesos. Si querés, seguimos con un acuerdo mensual de mantenimiento y mejoras; si no, cualquier desarrollador puede continuarlo.',
  },
  {
    q: '¿Trabajan con clientes de otros países?',
    a: 'Sí. Todo el proceso es remoto y las charlas se coordinan por videollamada.',
  },
]

export default function Faq() {
  const ref = useReveal()

  return (
    <section className="block block--tight" id="faq">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Preguntas</p>
        <h2>Lo que nos suelen preguntar.</h2>

        <div className={s.faq}>
          {PREGUNTAS.map((p) => (
            <details key={p.q}>
              <summary>{p.q}</summary>
              <p className={s.answer}>{p.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
