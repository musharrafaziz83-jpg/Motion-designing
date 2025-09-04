import React from 'react'
import { motion } from 'framer-motion'

export default function Pricing(){
  const tiers = [
    { name: 'Quick Start', price: '₹15,000', features: ['1 hero reel', '2 revisions', '2K deliverable'] },
    { name: 'Studio', price: '₹55,000', features: ['3-4 minute reel', '3D scene', '4K deliverable', 'Color grade'] },
    { name: 'Enterprise', price: 'Custom', features: ['Pipeline integration', 'Team support', 'Priority slot'] },
  ]

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white">Packages</h2>
        <p className="mt-2 text-white/70">Transparent pricing to get you started. Custom quotes available for complex shoots and real-time experiences.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <motion.div key={t.name} whileHover={{ y: -8 }} className="rounded-2xl p-6 bg-white/5 border border-white/6">
              <div className="text-white font-semibold text-lg">{t.name}</div>
              <div className="text-3xl font-bold mt-3 text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-white/70">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <div className="mt-6">
                <button className="rounded-full bg-white text-black px-4 py-2" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Order</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
