import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-pink-300/40 via-fuchsia-300/40 to-amber-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-teal-300/40 via-cyan-300/40 to-blue-300/40 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-black/5 px-3 py-1 text-xs text-slate-700 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-amber-400" />
              New: Spring flavors just dropped
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Premium candy crafted for modern tastes
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              Elevate your sweet moments with gourmet ingredients, bold flavors, and a refined, colorful aesthetic. Not childish—just deliciously sophisticated.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-400 text-white px-5 py-3 font-medium shadow-lg shadow-pink-500/20 ring-1 ring-black/10">
                Shop Bestsellers
              </a>
              <a href="#flavors" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium ring-1 ring-black/10 hover:bg-slate-50">
                Explore Flavors
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-pink-300/40 via-fuchsia-300/40 to-amber-300/40 blur-2xl rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1500&auto=format&fit=crop"
                alt="Assorted colorful candies in a glass jar"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl ring-1 ring-black/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
