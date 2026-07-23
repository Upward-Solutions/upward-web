import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../config.js'
import s from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [logoOk, setLogoOk] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`wrap ${s.inner}`}>
        <a className={s.brand} href="#top">
          {/* Poné tu logotipo en public/logo.svg.
              Si el archivo no está, se muestra la palabra Upward como respaldo. */}
          {logoOk ? (
            <img src="/logo.svg" alt="Upward" className={s.logo} onError={() => setLogoOk(false)} />
          ) : (
            <span className={s.wordmark}>Upward</span>
          )}
        </a>

        <nav className={s.links}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className={`btn btn--primary ${s.cta}`} href="#contacto">
          Empezar
        </a>
      </div>
    </header>
  )
}
