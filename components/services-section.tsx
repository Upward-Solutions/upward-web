"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Smartphone, Database, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web a medida con las últimas tecnologías para garantizar rendimiento y escalabilidad.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "SEO",
    description:
      "Optimizamos tu sitio web para los motores de búsqueda, mejorando tu visibilidad online y atrayendo más tráfico.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Desarrollo Móvil",
    description:
      "Desarrollamos aplicaciones móviles nativas y multiplataforma que se adaptan a tus necesidades específicas.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Bases de Datos",
    description: "Diseñamos e implementamos soluciones de bases de datos eficientes y seguras para tu negocio.",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Analítica Web",
    description:
      "Implementamos herramientas de análisis para medir el rendimiento de tu sitio y tomar decisiones basadas en datos.",
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para ayudar a tu empresa a destacar en el mundo digital.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
