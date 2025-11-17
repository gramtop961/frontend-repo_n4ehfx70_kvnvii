import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold shadow-md group-hover:scale-105 transition-transform">味</div>
          <div>
            <p className="text-sm leading-tight text-gray-500">Wei House</p>
            <p className="-mt-0.5 font-semibold tracking-wide">Taste of China</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">Menu</a>
          <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">Our Story</a>
          <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors">Gallery</a>
          <a href="#visit" className="text-gray-700 hover:text-red-600 transition-colors">Visit</a>
          <a href="#reserve" className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm">Reserve</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
