'use client'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactForm() {
  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-red-900"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Iniciar conversacion
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-red-800/50 backdrop-blur-sm rounded-lg p-8"
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input id="name" placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder-white/50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" className="bg-white/10 border-white/20 text-white placeholder-white/50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your fiery message"
              ></textarea>
            </div>
            <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-red-900">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}