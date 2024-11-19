'use client'
import { motion } from 'framer-motion'
import { Zap, Flame, ChevronRight, Users, Globe } from 'lucide-react'

const features = [
  { title: "Desarrollo ultrarrápido", icon: Zap, description: "Entregamos soluciones de alto rendimiento a la velocidad del rayo." },
  { title: "Potencia creativa", icon: Flame, description: "Nuestros diseños encienden la imaginación y cautivan a las audiencias." },
  { title: "Escalabilidad sin límites", icon: ChevronRight, description: "Soluciones que crecen con tu negocio, desde la chispa hasta el incendio." },
  { title: "Soporte 24/7", icon: Users, description: "Nuestro equipo siempre está listo para apagar cualquier problema." },
  { title: "Alcance global", icon: Globe, description: "Propagando incendios digitales por todo el mundo." },
  { title: "Chispa innovadora", icon: Zap, description: "Tecnología de vanguardia para mantenerte por delante de la competencia." },
]


export default function FeaturesGrid() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-br from-red-900 to-orange-700"
      id="solutions"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Phoenix IT Solutions?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-red-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-red-700/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}