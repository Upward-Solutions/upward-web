"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Aumentar el rango de movimiento para un efecto paralax más pronunciado
  const y = useTransform(scrollYProgress, [0, 1], [0, 500])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Función para scroll suave a la sección de servicios
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById("servicios")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
          style={{ y, opacity }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Transformamos Ideas en Experiencias Digitales
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Somos expertos en desarrollo web que combinan diseño innovador y tecnología de vanguardia para crear
            soluciones digitales que impulsan tu negocio.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-6"
          >
            <a
              href="#servicios"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-lg group"
            >
              <span>Descubre nuestros servicios</span>
              <ArrowDown className="animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Añadir un gradiente en la parte inferior para una transición más suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </section>
  )
}
