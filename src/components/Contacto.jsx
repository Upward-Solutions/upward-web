import { useState } from 'react'
import Contornos from './Contornos.jsx'
import useReveal from '../hooks/useReveal.js'
import { CONTACTO } from '../config.js'
import s from './Contacto.module.css'

const VACIO = { nombre: '', mail: '', mensaje: '' }

export default function Contacto() {
  const ref = useReveal()
  const [form, setForm] = useState(VACIO)

  const set = (campo) => (e) => setForm({ ...form, [campo]: e.target.value })

  /* Sin backend: abre el cliente de mail con todo cargado.
     Si más adelante querés recibirlos en un servicio, reemplazá esta función. */
  const enviar = (e) => {
    e.preventDefault()
    const asunto = encodeURIComponent(`Proyecto — ${form.nombre}`)
    const cuerpo = encodeURIComponent(`${form.mensaje}\n\n— ${form.nombre} (${form.mail})`)
    window.location.href = `mailto:${CONTACTO.mail}?subject=${asunto}&body=${cuerpo}`
  }

  return (
    <section className="dark block" id="contacto">
      <Contornos flip />
      <div className={`wrap reveal ${s.grid}`} ref={ref}>
        <div>
          <p className="eyebrow">Empecemos</p>
          <h2>Contanos qué querés resolver.</h2>
          <p className={`lead ${s.intro}`}>
            La primera charla es una conversación de producto, no una llamada de ventas. Salís con
            una opinión concreta sobre tu proyecto, nos contrates o no.
          </p>

          <div className={s.direct}>
            <a href={`mailto:${CONTACTO.mail}`}>Escribirnos por mail</a>
            <a href={`https://wa.me/${CONTACTO.whatsapp}`} target="_blank" rel="noreferrer">
              Escribirnos por WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={enviar}>
          <label className={s.field}>
            <span>Nombre</span>
            <input value={form.nombre} onChange={set('nombre')} required autoComplete="name" />
          </label>

          <label className={s.field}>
            <span>Mail</span>
            <input
              type="email"
              value={form.mail}
              onChange={set('mail')}
              required
              autoComplete="email"
            />
          </label>

          <label className={s.field}>
            <span>Qué querés construir</span>
            <textarea
              value={form.mensaje}
              onChange={set('mensaje')}
              required
              placeholder="Contanos el problema en dos o tres líneas."
            />
          </label>

          <button className="btn btn--light" type="submit">
            Enviar mensaje <span className="arw">↗</span>
          </button>
        </form>
      </div>
    </section>
  )
}
