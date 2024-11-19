'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MenuIcon, X, Globe, Smartphone, Cloud, Code, ShieldCheck, Zap, Users, Building, Briefcase, Phone, Folder } from 'lucide-react'
import Image from 'next/image'

const navItems = {
  Servicios: {
    icon: <Zap className="h-6 w-6" />,
    items: [
      { title: "Desarrollo Web", icon: <Globe className="h-5 w-5" /> },
      { title: "Desarrollo Móvil", icon: <Smartphone className="h-5 w-5" /> },
      { title: "Soluciones en la Nube", icon: <Cloud className="h-5 w-5" /> },
      { title: "DevOps", icon: <Code className="h-5 w-5" /> },
      { title: "Ciberseguridad", icon: <ShieldCheck className="h-5 w-5" /> },
    ]
  },
  Soluciones: {
    icon: <Briefcase className="h-6 w-6" />,
    items: [
      { title: "Empresas", icon: <Building className="h-5 w-5" /> },
      { title: "Startups", icon: <Zap className="h-5 w-5" /> },
      { title: "Pequeñas Empresas", icon: <Users className="h-5 w-5" /> },
    ]
  },
  Portafolio: {
    icon: <Folder className="h-6 w-6" />,
    items: null
  },
  Nosotros: {
    icon: <Users className="h-6 w-6" />,
    items: [
      { title: "Nuestro Equipo", icon: <Users className="h-5 w-5" /> },
      { title: "Empresa", icon: <Building className="h-5 w-5" /> },
      { title: "Carreras", icon: <Briefcase className="h-5 w-5" /> },
    ]
  },
  Contacto: {
    icon: <Phone className="h-6 w-6" />,
    items: null
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavbarVisible(false)
    } else {
      setIsNavbarVisible(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-orange-500 to-yellow-500 text-white">
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 bg-red-900/90 backdrop-blur-sm`}
        initial={{ y: -100 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Link href={'/'} className='flex items-center group'>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/fenix.png"
                    alt="Logo de Phoenix"
                    className="h-10 w-10 group-hover:scale-110 transition-transform"
                    width={40}
                    height={40}
                    priority
                  />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold p-2"
                  animate={{ 
                    color: ['#ffffff', '#ffd700', '#ffffff'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Phoenix IT
                </motion.span>
              </Link>
            </motion.div>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {Object.entries(navItems).map(([key, value]) => (
                    <NavigationMenuItem key={key}>
                      {value.items ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-800 transition-colors duration-200">
                            <span className="flex items-center">
                              {value.icon}
                              <span className="ml-2">{key}</span>
                            </span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-red-900/95 backdrop-blur-sm rounded-lg">
                              {value.items.map((item) => (
                                <li key={item.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href="#"
                                      className="flex items-center p-3 space-x-3 rounded-md hover:bg-red-800 transition-colors duration-200"
                                    >
                                      {item.icon}
                                      <span className="font-medium">{item.title}</span>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link 
                          href={`#${key.toLowerCase()}`}
                          className="flex items-center text-white hover:text-yellow-300 transition-colors duration-200 px-4 py-2"
                        >
                          {value.icon}
                          <span className="ml-2">{key}</span>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={'#contact'}>
                <Button className="hidden md:inline-flex bg-yellow-400 text-red-900 hover:bg-yellow-300 transition-colors duration-200">
                  Contactar
                </Button>
                </Link>
              </motion.div>
              <Button 
                variant="ghost" 
                className="md:hidden text-white hover:bg-red-800 transition-colors duration-200" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 inset-x-0 bg-red-900/95 backdrop-blur-sm z-40 overflow-hidden"
          >
            <div className="py-4 px-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {Object.entries(navItems).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-2"
                >
                  {value.items ? (
                    <div className="space-y-2">
                      <div className="font-medium text-white flex items-center">
                        {value.icon}
                        <span className="ml-2">{key}</span>
                      </div>
                      {value.items.map((item) => (
                        <Link
                          key={item.title}
                          href="#"
                          className="flex items-center py-2 px-4 text-sm text-white/80 hover:text-white hover:bg-red-800 rounded-md transition-colors duration-200"
                        >
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      href={`#${key.toLowerCase()}`}
                      className="flex items-center text-white hover:text-yellow-300 transition-colors duration-200"
                    >
                      {value.icon}
                      <span className="ml-2">{key}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="py-2"
              >
                <Button className="w-full bg-yellow-400 text-red-900 hover:bg-yellow-300 transition-colors duration-200">
                  Contactar
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="bg-red-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Contenido del pie de página */}
          </div>
          <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50">
            © 2024 Phoenix IT Solutions. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}