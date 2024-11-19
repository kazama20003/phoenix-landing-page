'use client'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  { id: 1, title: "E-commerce", description: "Optimizando empresas de comercio", imageSrc: "/home/prueba.png" },
  { id: 2, title: "Landing Page", description: "Verifrut", imageSrc: "/home/veryfrut.png" },
  { id: 3, title: "Sistema de orden/pedido", description: "Revolutionizing software", imageSrc: "/home/prueba2.png" },
  { id: 4, title: "E-commerce", description: "Muebles -Store", imageSrc: "/home/imagen1.png" },
  { id: 5, title: "E-commerce", description: "Ropa", imageSrc: "/home/imagen2.png" },
  { id: 6, title: "Suscripciones", description: "Web de suscripcion mensual/anual", imageSrc: "/home/imagen3.png" },
]

const PortfolioCard = ({ project }: { project: { id: number, title: string, description: string, imageSrc: string } }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: project.id * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-lg aspect-video shadow-lg"
    aria-label={`Project ${project.id}: ${project.title}`}
  >
    <Image
      src={project.imageSrc}
      alt={project.title}
      width={400}
      height={300}
      className="object-cover transition-transform group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="absolute bottom-4 left-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-white/80">{project.description}</p>
      </div>
    </div>
  </motion.div>
)

export default function Portfolio() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-red-900"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Nuestros proyectos más destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="text-yellow-600 border-white hover:bg-white/10">
          Ver todos los proyectos
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
