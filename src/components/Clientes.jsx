import { useState } from 'react'
import clientes from '../data/clientes.json'
import useReveal from '../hooks/useReveal.js'
import s from './Clientes.module.css'

/* La sección entera se arma desde src/data/clientes.json.
   Si el archivo queda como un array vacío, la sección no se muestra. */

function Logo({ src, titulo }) {
  const [ok, setOk] = useState(Boolean(src))
  const inicial = (titulo || '?').trim().charAt(0).toUpperCase()

  return (
    <div className={s.logo}>
      {ok ? (
        <img src={src} alt={titulo} onError={() => setOk(false)} />
      ) : (
        <span className={s.fallback}>{inicial}</span>
      )}
    </div>
  )
}

export default function Clientes() {
  const ref = useReveal()
  if (!clientes.length) return null

  return (
    <section className="block" id="clientes">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Clientes</p>
        <h2>Con quiénes trabajamos.</h2>

        <div className={s.grid}>
          {clientes.map((c) => (
            <article className={s.client} key={c.titulo + c.descripcion}>
              <Logo src={c.logo} titulo={c.titulo} />
              <h3>{c.titulo}</h3>
              <p>{c.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
