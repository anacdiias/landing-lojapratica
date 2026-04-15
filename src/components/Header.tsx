import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo-lp.png'
import { buildWhatsAppLink } from '../lib/contact'

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
          <a href="http://www.lojapratica.com" className="flex items-center">
            <img
              src={logo}
              alt="Loja Prática"
              className="h-15 sm:h-17 w-auto object-contain"
            />
          </a>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base md:text-lg transition-colors duration-200 hover:text-white"
                style={{ color: '#9CA3AF', fontFamily: 'Manrope, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de ação */}
          <div className="hidden md:block">
            <a
              href={buildWhatsAppLink('Olá! Quero saber mais sobre os serviços da Loja Prática para minha loja.')}
              className="btn-primary text-base"
              style={{ padding: '12px 22px', fontSize: '16px' }}
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Botão hambúrguer mobile */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} color="#F8FAFC" /> : <Menu size={24} color="#F8FAFC" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
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
                  className="py-3 text-base transition-colors"
                  style={{ color: '#E5E7EB', fontFamily: 'Manrope, sans-serif', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppLink('Olá! Quero saber mais sobre os serviços da Loja Prática para minha loja.')}
                className="btn-primary mt-3 justify-center text-base"
                style={{ fontSize: '16px', padding: '14px 22px' }}
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


