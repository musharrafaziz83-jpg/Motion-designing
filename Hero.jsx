import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Play, Camera, Cpu } from 'lucide-react'

export default function Hero(){
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030712] via-[#061123] to-[#081224]" />
      <div className="max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Motion design powered by advanced tech</h1>
            <p className="mt-4 text-white/80 max-w-xl">We blend cinematic animation, real-time 3D, and AI-assisted tools to produce motion that feels alive. Fast turnarounds, studio-grade visuals.</p>

            <div className="mt-6 flex gap-3">
              <button onClick={() => document.getElementById('work').scrollIntoView({behavior:'smooth'})} className="rounded-full bg-white px-5 py-2 text-black font-medium">See our work</button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="rounded-full border border-white/20 px-5 py-2 text-white">Get a quote</button>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2"><Play className="w-4 h-4"/> Demo reel</div>
              <div className="flex items-center gap-2"><Camera className="w-4 h-4"/> 4K deliverables</div>
              <div className="flex items-center gap-2"><Cpu className="w-4 h-4"/> GPU render farm</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="w-full">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 ring-1 ring-white/6 shadow-xl">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/assets/demo-reel.mp4" type="video/mp4" />
                <img src="/assets/placeholder-1.svg" alt="demo"/>
              </video>
            </div>
            <div className="mt-3 text-xs text-white/60">Demo reel (replace with your MP4 or Lottie animation)</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
