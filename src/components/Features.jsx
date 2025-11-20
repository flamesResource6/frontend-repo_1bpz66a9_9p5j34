import { motion } from 'framer-motion'
import { Star, Sparkles, Leaf, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Modern Flavors',
    desc: 'Unexpected pairings and seasonal drops designed for refined palates.'
  },
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    desc: 'Natural colors and gourmet inputs—no compromise on quality.'
  },
  {
    icon: Star,
    title: 'Premium Finish',
    desc: 'Beautifully crafted textures and presentation that elevate gifting.'
  },
  {
    icon: BadgeCheck,
    title: 'Shopify Ready',
    desc: 'Optimized sections, responsive layouts, and SEO-friendly markup.'
  }
]

export default function Features() {
  return (
    <section id="flavors" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why you’ll love our candy</h2>
          <p className="mt-3 text-slate-600">A colorful, grown-up take on sweets—crafted for taste and aesthetics.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
