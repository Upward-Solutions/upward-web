import { CONTACTO } from '../config.js'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.foot}>
      <div className={`wrap ${s.inner}`}>
        <p>Upward — Desarrollo a medida asistido por IA</p>
        <p>
          <a href={`mailto:${CONTACTO.mail}`}>{CONTACTO.mail}</a>
        </p>
      </div>
    </footer>
  )
}
