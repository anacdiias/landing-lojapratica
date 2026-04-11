import { Instagram, Linkedin, MessageCircle } from 'lucide-react'
import logoLojaPratica from '../assets/logo-lp.png'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export function Footer() {
  return (
    <footer
      style={{
        background: '#050814',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container-inner py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img
                src={logoLojaPratica}
                alt="Loja Prática"
                className="h-15 w-auto object-contain"
              />
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280', lineHeight: 1.7, maxWidth: '240px' }}>
              Tecnologia que escala negócios. Sites, automação com IA e estrutura digital completa.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: 'https://wa.me/5500000000000', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#9CA3AF',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#E5E7EB' }}
            >
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#E5E7EB' }}
            >
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  className="text-sm transition-colors hover:text-white"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}
                >
                  WhatsApp: (00) 00000-0000
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  @lojapratica
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  contato@lojapratica.com.br
                </span>
              </li>
            </ul>

            <a
              href="https://wa.me/5500000000000"
              className="btn-primary mt-6 text-sm"
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              Falar agora
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4B5563' }}>
            © 2026 Loja Prática. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4B5563' }}>
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}
