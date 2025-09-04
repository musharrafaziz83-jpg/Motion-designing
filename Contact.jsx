import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 lg:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Start a project</h2>
          <p className="mt-2 text-white/70">Tell us what you want to build — a promo, product motion, AR scene, or a real-time experience.</p>
          <div className="mt-6 space-y-3 text-white/70">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@novamotion.studio</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +91 90000 00000</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Mumbai, India</div>
          </div>
        </div>

        <form className="bg-white/6 rounded-2xl p-6" onSubmit={(e) => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); const subject = encodeURIComponent('New project from ' + (data.name||'unknown')); const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`); window.location.href = `mailto:hello@novamotion.studio?subject=${subject}&body=${body}`; }}>
          <div className="grid gap-3">
            <input name="name" placeholder="Your name" required className="p-3 rounded-md bg-black/30 text-white placeholder-white/60" />
            <input name="email" type="email" placeholder="Email" required className="p-3 rounded-md bg-black/30 text-white placeholder-white/60" />
            <textarea name="message" rows={5} placeholder="Brief about the project" required className="p-3 rounded-md bg-black/30 text-white placeholder-white/60"></textarea>
            <div className="flex items-center justify-between">
              <button type="submit" className="rounded-full bg-white px-4 py-2 text-black">Send</button>
              <div className="text-white/60 text-xs">We reply within 48 hours.</div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
