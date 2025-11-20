import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 'bestseller-1',
    name: 'Citrus Fizz Gummies',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1605869724169-c6639a890de0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXRydXMlMjBGaXp6JTIwR3VtbWllc3xlbnwwfDB8fHwxNzYzNjcyNTk2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'from-amber-300/30 via-orange-300/30 to-yellow-300/30'
  },
  {
    id: 'bestseller-2',
    name: 'Berry Velvet Chews',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1612969308146-066d55f37ccb?q=80&w=1400&auto=format&fit=crop',
    color: 'from-pink-300/30 via-fuchsia-300/30 to-purple-300/30'
  },
  {
    id: 'bestseller-3',
    name: 'Matcha Almond Brittle',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1689231492879-e38660a5dea4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaGElMjBBbG1vbmQlMjBCcml0dGxlfGVufDB8MHx8fDE3NjM2NzI1OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'from-emerald-300/30 via-teal-300/30 to-cyan-300/30'
  },
]

export default function Products() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bestsellers</h2>
            <p className="text-slate-600 mt-1">Fan favorites that ship fast.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">
            View all products
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`relative h-64 bg-gradient-to-tr ${p.color}`}>
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-slate-900 font-medium">{p.price}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
