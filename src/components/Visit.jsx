import React from 'react'

const Visit = () => {
  return (
    <section id="visit" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Visit Us</h2>
            <p className="mt-3 text-gray-700">123 Harmony St, Chinatown, Your City</p>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-gray-50 border">
                <p className="text-sm text-gray-500">Hours</p>
                <p className="mt-1 font-semibold">Mon–Thu 11:30–9:00</p>
                <p className="font-semibold">Fri–Sat 11:30–10:00</p>
                <p className="font-semibold">Sun 12:00–9:00</p>
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border">
                <p className="text-sm text-gray-500">Contact</p>
                <p className="mt-1 font-semibold">(555) 123-4567</p>
                <p className="font-semibold">hello@weihouse.com</p>
              </div>
            </div>

            <div id="reserve" className="mt-8 p-5 rounded-xl bg-white border shadow-sm">
              <h3 className="font-semibold">Reserve a Table</h3>
              <form className="mt-4 grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500" />
                <input type="email" placeholder="Email" className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500" />
                <input type="date" className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500" />
                <input type="time" className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500" />
                <input type="number" min="1" placeholder="Guests" className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500" />
                <button type="button" className="sm:col-span-2 px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700">Request Reservation</button>
              </form>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1603463251100-dca0ef22fe74?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXAlMjBwbGFjZWhvbGRlcnxlbnwwfDB8fHwxNzYzNDE3OTA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Map placeholder" className="w-full h-[520px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
