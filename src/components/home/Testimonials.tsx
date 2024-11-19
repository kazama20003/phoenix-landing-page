'use client'
import { motion } from 'framer-motion'

const testimonials = [
  { name: "John Doe", role: "CEO, Tech Inferno", quote: "Phoenix IT Solutions encendió nuestra presencia digital con su software innovador." },
  { name: "Jane Smith", role: "Directora de Marketing, Brand Spark", quote: "Los diseños creativos de Phoenix han encendido nuestra identidad de marca." },
  { name: "Alex Johnson", role: "Gerente de Producto, App Flame", quote: "Sus animaciones trajeron una energía ardiente a nuestra app. ¡Absolutamente chisporroteante!" },
]


export default function Testimonials() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-yellow-500 to-red-700"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-red-800/50 backdrop-blur-sm rounded-lg p-6"
            >
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 mr-4"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}