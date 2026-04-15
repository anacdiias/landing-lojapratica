import { Instagram, MessageCircle } from 'lucide-react'
import logoLojaPratica from '../assets/logo-lp.png'
import { buildWhatsAppLink, INSTAGRAM_URL } from '../lib/contact'

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
          {/* Coluna da marca */}
          <div>
            <div className="mb-5">
              <img
                src={logoLojaPratica}
                alt="Loja Prática"
                className="h-15 w-auto object-contain"
              />
            </div>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '13px', color: '#6B7280', lineHeight: 1.7, maxWidth: '240px' }}>
              Tecnologia que escala negócios. Sites, automação com IA e estrutura digital completa.
            </p>

            {/* Links sociais */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
                // { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: buildWhatsAppLink('Olá! Vim pelo site da Loja Prática e quero falar com vocês.'), label: 'WhatsApp' },
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

          {/* Navegação */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ fontFamily: 'Sora, sans-serif', color: '#E5E7EB' }}
            >
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] transition-colors hover:text-white"
                    style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7280' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="mb-4 text-[13px] font-semibold"
              style={{ fontFamily: 'Sora, sans-serif', color: '#E5E7EB' }}
            >
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={buildWhatsAppLink('Olá! Quero falar com a Loja Prática sobre meu projeto.')}
                  className="text-[13px] transition-colors hover:text-white"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7280' }}
                >
                  WhatsApp: (48) 99803-0856
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] transition-colors hover:text-white"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7280' }}
                >
                  @lojapraticavirtual
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7280' }}>
                  contato@lojapratica.com
                </span>
              </li>
            </ul>

            <a
              href={buildWhatsAppLink('Olá! Quero falar agora com a Loja Prática sobre os serviços para minha loja.')}
              className="btn-primary mt-6 text-sm"
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              Falar agora
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="divider-gradient mb-8" />

        {/* Barra inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: '#4B5563' }}>
            © 2026 Loja Prática. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: '#4B5563' }}>
            CNPJ: 64.125.805/0001-44
          </p>
        </div>
      </div>
    </footer>
  )
}


