import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMenu from './components/FeaturedMenu'
import About from './components/About'
import Visit from './components/Visit'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <About />
        <Visit />
        <footer className="border-t py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Wei House. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#menu" className="hover:text-red-600">Menu</a>
              <a href="#about" className="hover:text-red-600">Our Story</a>
              <a href="#visit" className="hover:text-red-600">Visit</a>
              <a href="/test" className="hover:text-red-600">System Test</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
