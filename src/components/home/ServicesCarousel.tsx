'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Paintbrush, Film } from 'lucide-react'

const services = [
    { title: "Desarrollo de software", icon: Code, description: "Soluciones de vanguardia adaptadas a tus necesidades" },
    { title: "Diseño creativo", icon: Paintbrush, description: "Imágenes impactantes que capturan la esencia de tu marca" },
    { title: "Estudio de animación", icon: Film, description: "Damos vida a tus ideas a través del movimiento" },
    ]

export default function ServicesCarousel() {
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-red-800" id="services">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Nuestros servicios de vanguardia
        </motion.h2>
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence initial={false}>
            {services.map((service, index) => (
              activeService === index && (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <service.icon className="w-24 h-24 mb-6 text-yellow-400" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-xl text-white/80 max-w-md">{service.description}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                activeService === index ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              onClick={() => setActiveService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}