import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <div>© {new Date().getFullYear()} Nova Motion Studio</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
