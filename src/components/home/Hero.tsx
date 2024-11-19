'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
export default function Hero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section className="relative pt-32 pb-20 md:pt-80 md:pb-52">
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Comienza tu Presencia digital
            </h1>
            <p className="text-xl text-white/80">
            Soluciones de software innovadoras, diseños atrevidos y animaciones deslumbrantes para impulsar el crecimiento de su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-400 text-red-900 hover:bg-yellow-300" size="lg">
                Comienza tu proyecto
              </Button>
              <Button variant="outline" className="text-black border-white hover:bg-white/10" size="lg">
                Vea nuestro trabajos
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full blur-3xl opacity-30" />
            <div className="relative bg-gradient-to-br from-red-900/40 to-orange-700/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/10">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="space-y-4"
                >
                  <div className="h-24 rounded-lg bg-gradient-to-br from-yellow-400 to-red-500" />
                  <div className="h-32 rounded-lg bg-gradient-to-br from-red-500 to-red-700" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="h-32 rounded-lg bg-gradient-to-br from-orange-600 to-red-800" />
                  <div className="h-24 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600" />
                </motion.div>
              </div>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="mt-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-500" />
                  <div className="flex-1">
                    <div className="h-2 w-3/4 rounded-full bg-white/20" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}