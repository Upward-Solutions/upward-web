"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function FloatingCtaButton() {
  const [visible, setVisible] = useState(false)
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false)

  // Referencia para el observer
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Configurar IntersectionObserver para detectar cuando la sección de contacto está visible
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsContactSectionVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }, // Considerar visible cuando al menos 30% de la sección está en el viewport
    )

    const contactSection = document.getElementById("contacto")
    if (contactSection && observerRef.current) {
      observerRef.current.observe(contactSection)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Mostrar el botón después de hacer scroll, pero no en la sección hero ni en la sección de contacto
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 300 // Mostrar después de 300px de scroll (fuera de la sección hero)

      setVisible(scrollY > threshold && !isContactSectionVisible)
    }

    window.addEventListener("scroll", handleScroll)
    // Ejecutar una vez al inicio para establecer el estado inicial
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isContactSectionVisible])

  // Función para scroll suave a la sección de contacto
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors group"
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contactar ahora"
        >
          <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
          <span className="font-medium">Contactar ahora</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
