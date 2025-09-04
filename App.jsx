import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import WorkShowcase from './components/WorkShowcase'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Nav />
      <main>
        <Hero />
        <TechGrid />
        <WorkShowcase />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
