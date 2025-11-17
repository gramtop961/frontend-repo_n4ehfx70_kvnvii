import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-24 w-72 h-72 bg-amber-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Authentic Chinese Kitchen</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-gray-900">Clean. Modern. </span>
            <span className="text-red-600">Delicious.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Hand-pulled noodles, wok-fired flavors, and seasonal specialties crafted with care. 
            Dine in or order ahead for pickup.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#menu" className="px-6 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow">View Menu</a>
            <a href="#reserve" className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-800">Reserve a Table</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="text-red-600">•</span> No MSG</div>
            <div className="flex items-center gap-2"><span className="text-red-600">•</span> Vegan Options</div>
            <div className="flex items-center gap-2"><span className="text-red-600">•</span> Family Owned</div>
          </div>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1617195737492-7f2459f71d68?q=80&w=1200&auto=format&fit=crop" alt="Hero dish" className="rounded-2xl shadow-2xl object-cover w-full h-[420px]" />
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow p-4">
            <p className="text-sm font-semibold text-gray-900">House Dan Dan Noodles</p>
            <p className="text-xs text-gray-500">Fresh, springy, perfectly numbing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
