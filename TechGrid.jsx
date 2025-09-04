import React from 'react'
import { Cpu, Layers, Camera, Phone, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TechGrid(){
  const items = [
    { icon: <Cpu className="w-5 h-5"/>, title: 'Real-time 3D', desc: 'Unreal Engine / Unity for interactive scenes' },
    { icon: <Layers className="w-5 h-5"/>, title: '3D & VFX', desc: 'Blender / Cinema 4D / Redshift' },
    { icon: <Camera className="w-5 h-5"/>, title: 'Cinematic Rendering', desc: 'Photoreal renders, motion blur, DOF' },
    { icon: <Phone className="w-5 h-5"/>, title: 'AR / Mobile', desc: 'Optimized motion for mobile and AR' },
    { icon: <Play className="w-5 h-5"/>, title: 'AI Tools', desc: 'AI-assisted animation, style transfer' },
  ]

  return (
    <section id="tech" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white">Technology stack</h2>
        <p className="mt-2 text-white/70 max-w-2xl">We pair classic motion pipelines with real-time engines and AI to speed production and unlock new visuals.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(i => (
            <motion.div key={i.title} whileHover={{ y: -6 }} className="rounded-2xl p-4 bg-white/5 border border-white/6">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-white/90">{i.icon}</div>
                <div>
                  <div className="text-white font-semibold">{i.title}</div>
                  <div className="text-white/70 text-sm mt-1">{i.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
