import { useState, useEffect } from 'react'
import { LandPlot, Menu, X } from 'lucide-react'
import logo from '../assets/logo-lp.png'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,8,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        paddingTop: 'clamp(12px, 2vw, 24px)',
      }}
    >
      <div className="container-inner">
        <div
          className="flex items-center justify-between min-h-16 rounded-2xl px-4 sm:px-5"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 20px 50px rgba(0,0,0,0.22)' : 'none',
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Loja Prática"
              className="h-15 sm:h-17 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5500000000000?text=Olá!+Quero+saber+mais+sobre+a+Loja+Prática."
              className="btn-primary text-sm"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} color="#F8FAFC" /> : <Menu size={20} color="#F8FAFC" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(5,8,20,0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="container-inner pb-2">
            <div
              className="flex flex-col gap-1 rounded-b-2xl px-4 pb-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: 'none',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm transition-colors"
                  style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5500000000000"
                className="btn-primary mt-3 justify-center"
                style={{ fontSize: '14px', padding: '12px 20px' }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
