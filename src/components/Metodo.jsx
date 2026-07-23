import useReveal from '../hooks/useReveal.js'
import s from './Metodo.module.css'

const HABITUAL = [
  'Escribís vos el documento de requerimientos y el dev lo ejecuta al pie de la letra.',
  'Se cotiza por hora: cuanto más tarda, más cuesta.',
  'Ves el producto entero recién al final.',
  'Si algo no cierra, era lo que pediste.',
]

const NOSOTROS = [
  'Arrancamos por el problema. El alcance sale de la conversación, no de un formulario.',
  'La IA se come el trabajo repetitivo: pagás por el producto, no por las horas de tipeo.',
  'Entregas parciales navegables desde temprano.',
  'Si algo no conviene, te lo decimos antes de construirlo.',
]

export default function Metodo() {
  const ref = useReveal()

  return (
    <section className="block block--tight" id="metodo">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Por qué es distinto</p>
        <h2>No tomamos requerimientos.</h2>
        <p className={`lead ${s.intro}`}>
          Una lista de funcionalidades escrita antes de entender el problema es la forma más cara de
          equivocarse. Antes de escribir código nos sentamos a diseñar el sistema: qué hace, qué no
          hace y qué se puede dejar para después.
        </p>

        <div className={s.contrast}>
          <div className={s.colA}>
            <p className={s.head}>Cómo suele ser</p>
            <ul>
              {HABITUAL.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className={s.colB}>
            <p className={s.head}>Cómo trabajamos</p>
            <ul>
              {NOSOTROS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
