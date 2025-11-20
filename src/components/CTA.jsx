import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="about" className="relative py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-gradient-to-tr from-pink-300/30 via-fuchsia-300/30 to-amber-300/30 blur-3xl rounded-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 ring-1 ring-white/10 overflow-hidden"
        >
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-400 blur-3xl opacity-40" />
          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Elevate your store with a refined candy experience</h2>
              <p className="mt-3 text-white/80">Built for Shopify, this theme pairs modern motion, responsive sections, and SEO-friendly HTML so your brand looks premium and performs great.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium">
                Get the theme
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-800 text-white px-5 py-3 font-medium ring-1 ring-white/10">
                Talk to us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
