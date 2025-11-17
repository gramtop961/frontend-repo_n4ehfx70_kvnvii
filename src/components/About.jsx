import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We are a family-run kitchen bringing the bright, balanced flavors of regional Chinese cuisine to our community.
            From the snap of wok hei to the comfort of slow-simmered broths, our menu honors tradition while embracing modern tastes.
          </p>
          <p className="mt-4 text-gray-700">
            Ingredients are sourced daily, dumplings are folded by hand, and noodles are pulled to order. Welcome to your new favorite spot.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-white shadow">
              <p className="text-2xl font-bold text-red-600">12+</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">Years</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow">
              <p className="text-2xl font-bold text-red-600">1000+</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">Reviews</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow">
              <p className="text-2xl font-bold text-red-600">4.8</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">Rating</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1583338917451-face2751d4bf?q=80&w=1200&auto=format&fit=crop" 
            alt="Restaurant interior" 
            className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
