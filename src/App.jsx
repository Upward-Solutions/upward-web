import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Metodo from './components/Metodo.jsx'
import Rol from './components/Rol.jsx'
import Servicios from './components/Servicios.jsx'
import Proceso from './components/Proceso.jsx'
import Clientes from './components/Clientes.jsx'
import Faq from './components/Faq.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Metodo />
        <Rol />
        <Servicios />
        <Proceso />
        <Clientes />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
