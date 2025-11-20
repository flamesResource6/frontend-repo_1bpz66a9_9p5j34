import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO head via index.html; structure uses semantic sections */}
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
        <footer id="contact" className="py-10 border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-3">SweetStudio</h4>
                <p className="text-sm text-slate-600">A modern, professional candy brand—colorful, minimal, and delicious.</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Shop</h5>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li><a href="#" className="hover:text-slate-900">All products</a></li>
                  <li><a href="#" className="hover:text-slate-900">Bestsellers</a></li>
                  <li><a href="#" className="hover:text-slate-900">Gifts</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Company</h5>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li><a href="#about" className="hover:text-slate-900">About</a></li>
                  <li><a href="#" className="hover:text-slate-900">Sustainability</a></li>
                  <li><a href="#" className="hover:text-slate-900">Careers</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Stay in the loop</h5>
                <form className="flex gap-2">
                  <input type="email" placeholder="Email address" className="flex-1 rounded-xl ring-1 ring-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" aria-label="Email address" />
                  <button className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} SweetStudio. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
