"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./contact-form"

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Estamos listos para convertir tu idea en realidad. Ponte en contacto con nosotros y comencemos a trabajar
            juntos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Conecta con nosotros</h3>

                  <div className="space-y-6">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-white/60">+1 (234) 567-890</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@tuempresa.com"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-white/60">info@tuempresa.com</p>
                      </div>
                    </a>
                  </div>

                  <h3 className="text-xl font-semibold mt-10 mb-6">Síguenos</h3>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>

                  {!showForm && (
                    <div className="mt-10">
                      <Button onClick={() => setShowForm(true)} className="w-full">
                        Formulario de contacto
                      </Button>
                    </div>
                  )}
                </div>

                {showForm ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ContactForm />
                  </motion.div>
                ) : (
                  <div className="hidden md:block">
                    <motion.img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Contacto"
                      className="w-full h-auto rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
