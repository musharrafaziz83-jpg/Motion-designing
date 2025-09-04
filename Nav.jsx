import React, { useState } from 'react'
import { Rocket } from 'lucide-react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rocket className="w-6 h-6 text-white" />
          <span className="text-white font-semibold tracking-tight">Nova Motion</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-white/90">
          <button onClick={() => document.getElementById('work').scrollIntoView({behavior:'smooth'})}>Work</button>
          <button onClick={() => document.getElementById('tech').scrollIntoView({behavior:'smooth'})}>Tech</button>
          <button onClick={() => document.getElementById('pricing').scrollIntoView({behavior:'smooth'})}>Pricing</button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Contact</button>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block rounded-full px-4 py-2 text-sm bg-white text-black" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Let's talk</button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="toggle menu">{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/50 border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-3 text-white">
            <button onClick={() => {document.getElementById('work').scrollIntoView({behavior:'smooth'}); setOpen(false)}}>Work</button>
            <button onClick={() => {document.getElementById('tech').scrollIntoView({behavior:'smooth'}); setOpen(false)}}>Tech</button>
            <button onClick={() => {document.getElementById('pricing').scrollIntoView({behavior:'smooth'}); setOpen(false)}}>Pricing</button>
            <button onClick={() => {document.getElementById('contact').scrollIntoView({behavior:'smooth'}); setOpen(false)}}>Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
