"use client"

import { motion } from "framer-motion"

const values = [
  {
    title: "Innovación Constante",
    description: "Nos mantenemos a la vanguardia de las nuevas tecnologías",
  },
  {
    title: "Compromiso con la Calidad",
    description: "Cada línea de código refleja nuestra dedicación a la excelencia",
  },
  {
    title: "Enfoque en el Cliente",
    description: "Tu visión es nuestra prioridad, trabajamos juntos para hacerla realidad",
  },
  {
    title: "Soluciones a Medida",
    description: "Desarrollamos proyectos personalizados que se adaptan a tus necesidades",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Principios que guían nuestro trabajo y definen quiénes somos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                <motion.h3
                  className="text-2xl font-bold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
