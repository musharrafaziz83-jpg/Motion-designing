import React from 'react'
import { motion } from 'framer-motion'

export default function WorkShowcase(){
  const projects = [
    { title: 'Neon City Promo', img: '/assets/placeholder-2.svg', tag: 'Cinematic' },
    { title: 'Product UI Motion', img: '/assets/placeholder-3.svg', tag: 'UI animation' },
    { title: 'AR Experience', img: '/assets/placeholder-4.svg', tag: 'AR' },
    { title: 'Brand Reel', img: '/assets/placeholder-5.svg', tag: 'Commercial' },
  ]

  return (
    <section id="work" className="py-16 lg:py-24 bg-gradient-to-b from-black via-[#020617] to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Selected work</h2>
            <p className="mt-2 text-white/70">Hover any project to see details. Click to open a case study or play the reel.</p>
          </div>
          <div>
            <button className="rounded-full border border-white/10 px-4 py-2 text-white text-sm" onClick={() => alert('Filter feature coming soon')}>Filter</button>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.div key={p.title} whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden relative cursor-pointer bg-white/3">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-sm font-semibold">{p.tag}</div>
                <div className="text-lg font-bold">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
