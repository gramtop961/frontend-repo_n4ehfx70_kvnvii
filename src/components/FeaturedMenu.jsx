import React from 'react'

const items = [
  {
    title: 'Xiao Long Bao',
    desc: 'Soup dumplings with fragrant pork filling',
    price: '$11',
    img: 'https://images.unsplash.com/photo-1604908554049-1ca73d5f224e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mapo Tofu',
    desc: 'Sichuan pepper, silky tofu, chili bean sauce',
    price: '$14',
    img: 'https://images.unsplash.com/photo-1604908177077-8b38d49a3ee4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Beef Chow Fun',
    desc: 'Wok-fried wide rice noodles with beef & sprouts',
    price: '$16',
    img: 'https://images.unsplash.com/photo-1617195738093-5ebf418ebda2?q=80&w=1200&auto=format&fit=crop',
  },
]

const FeaturedMenu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Signature Dishes</h2>
            <p className="text-gray-600 mt-2">A few favorites our guests love</p>
          </div>
          <a href="#reserve" className="hidden sm:inline-flex px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700">Book a Table</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-semibold shadow">{item.price}</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#full-menu" className="text-red-600 font-medium hover:underline">See full menu</a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMenu
