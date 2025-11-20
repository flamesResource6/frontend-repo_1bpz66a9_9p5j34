import { useState } from 'react'
import { Menu, ShoppingBag, Search, CandyCane, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Shop', href: '#' },
  { label: 'Flavors', href: '#flavors' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="SweetStudio home">
            <div className="relative">
              <span className="absolute inset-0 blur-xl bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-amber-300 opacity-60" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center shadow-sm ring-1 ring-black/5">
                <CandyCane className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
            <span className="font-semibold text-slate-900 tracking-tight">SweetStudio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-slate-700" aria-hidden="true" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2" aria-label="View cart">
              <ShoppingBag className="w-5 h-5 text-slate-700" aria-hidden="true" />
              <span className="text-sm text-slate-700">Cart</span>
            </button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6 text-slate-800" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="ml-auto h-full w-[85%] max-w-sm bg-white p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center">
                    <CandyCane className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span className="font-semibold">SweetStudio</span>
                </div>
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-slate-100" aria-label="Close menu">
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-slate-700 text-base" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-3 font-medium shadow-md shadow-slate-900/10">
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                  View Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
