"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ImageCarousel from "./image-carousel"

// Datos de proyectos actualizados con múltiples imágenes para cada proyecto
const projects = [
  {
    title: "E-commerce Premium",
    tags: ["React", "Node.js", "MongoDB"],
    description: "Tienda online completa con pasarela de pagos y gestión de inventario.",
    fullDescription:
      "Desarrollamos una plataforma de comercio electrónico completa con un diseño personalizado, integración de múltiples pasarelas de pago, sistema de gestión de inventario en tiempo real y panel de administración intuitivo. El proyecto incluyó optimización SEO y estrategias de marketing digital.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Home",
      "/placeholder.svg?height=600&width=800&text=Productos",
      "/placeholder.svg?height=600&width=800&text=Carrito",
      "/placeholder.svg?height=600&width=800&text=Checkout",
    ],
  },
  {
    title: "App de Gestión Empresarial",
    tags: ["Angular", "Firebase", "TypeScript"],
    description: "Sistema integral para la gestión de recursos y proyectos empresariales.",
    fullDescription:
      "Creamos una aplicación web progresiva (PWA) para la gestión integral de recursos empresariales, incluyendo módulos de gestión de proyectos, seguimiento de tiempo, facturación y análisis de datos. La aplicación cuenta con sincronización offline y notificaciones en tiempo real.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Dashboard",
      "/placeholder.svg?height=600&width=800&text=Proyectos",
      "/placeholder.svg?height=600&width=800&text=Calendario",
      "/placeholder.svg?height=600&width=800&text=Reportes",
    ],
  },
  {
    title: "Portal Educativo",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    description: "Plataforma de aprendizaje online con cursos interactivos y certificaciones.",
    fullDescription:
      "Desarrollamos un portal educativo completo con sistema de gestión de aprendizaje (LMS), que incluye creación de cursos, evaluaciones interactivas, seguimiento de progreso del estudiante, emisión de certificados y foro de discusión. La plataforma se optimizó para dispositivos móviles y tablets.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Cursos",
      "/placeholder.svg?height=600&width=800&text=Lecciones",
      "/placeholder.svg?height=600&width=800&text=Evaluaciones",
      "/placeholder.svg?height=600&width=800&text=Certificados",
    ],
  },
  {
    title: "Dashboard Analítico",
    tags: ["Vue.js", "D3.js", "Express"],
    description: "Panel de control con visualizaciones de datos en tiempo real para toma de decisiones.",
    fullDescription:
      "Diseñamos e implementamos un dashboard analítico con visualizaciones de datos complejas y actualizaciones en tiempo real. El proyecto incluyó la integración con múltiples fuentes de datos, filtros personalizables, exportación de informes y sistema de alertas basado en umbrales definidos por el usuario.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Estadísticas",
      "/placeholder.svg?height=600&width=800&text=Gráficos",
      "/placeholder.svg?height=600&width=800&text=KPIs",
      "/placeholder.svg?height=600&width=800&text=Configuración",
    ],
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="proyectos" className="py-20 bg-slate-100">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más destacados y descubre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedProject(project)}>
                        Ver más
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                      </DialogHeader>

                      {/* Carrusel de imágenes */}
                      {selectedProject && <ImageCarousel images={selectedProject.images} className="mb-4" />}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject?.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <DialogDescription className="text-base">{selectedProject?.fullDescription}</DialogDescription>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
