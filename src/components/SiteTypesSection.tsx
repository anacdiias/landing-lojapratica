import { ArrowRight, Target } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const siteTypes = [
  {
    title: 'E-commerce',
    description: 'Lojas online completas, integradas a pagamentos, estoque e vendas recorrentes.',
    domain: 'blincaskate.com.br / sparkfashion.com.br',
    models: [
      { label: 'Exemplo 1', href: 'https://blincaskate.com.br' },
      { label: 'Exemplo 2', href: 'https://sparkfashion.com.br' },
    ],
    accent: '#FF2DA3',
  },
  {
    title: 'Landing Page',
    description: 'Páginas de oferta otimizadas para conversão e capturar leads de forma simples.',
    domain: 'molascidadeazul.com.br',
    href: 'https://molascidadeazul.com.br',
    accent: '#7C3AED',
  },
  {
    title: 'Pousada e Institucional',
    description: 'Sites institucionais e para pousadas com reservas, contatos e presença profissional.',
    domain: 'flordaserraurubici.com.br',
    href: 'https://flordaserraurubici.com.br',
    accent: '#10B981',
  },
  {
    title: 'Agendamento & Beleza',
    description: 'Modelos para barbearias, estética, spas e salões com agendamento online integrado.',
    domain: 'Em breve',
    accent: '#F59E0B',
    placeholder: true,
  },
]

export function SiteTypesSection() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050814, #0A0E1A)' }}
    >
      <div className="container-inner relative z-10">
        <div className="max-w-[760px] mx-auto text-center mb-14">
          <p
            className={cn('mb-4 uppercase tracking-[0.28em] text-sm animate-on-scroll', inView && 'in-view')}
            style={{ color: '#A78BFA' }}
          >
            Desenvolvimento de sites
          </p>
          <h2
            className={cn('animate-on-scroll', inView && 'in-view')}
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.1,
            }}
          >
            Tipos de site que entregamos
          </h2>
          <p
            className={cn('mt-3 animate-on-scroll delay-100', inView && 'in-view')}
            style={{ fontFamily: 'Manrope, sans-serif', color: '#9CA3AF', lineHeight: 1.8 }}
          >
            Escolha entre uma solução de vendas, presença digital ou agendamento com design profissional e foco em resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {siteTypes.map((type, index) => (
            <div
              key={type.title}
              className={cn('glass-card p-8 flex flex-col h-full animate-on-scroll', `delay-${(index + 1) * 100}`, inView && 'in-view')}
              style={{ borderColor: `${type.accent}25` }}
            >
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: `${type.accent}15`, color: type.accent }}
              >
                <Target size={24} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#F8FAFC',
                }}
              >
                {type.title}
              </h3>
              <p
                className="mb-5 flex-1"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#CBD5E1', lineHeight: 1.8 }}
              >
                {type.description}
              </p>
              <div className="mb-5 text-sm" style={{ color: '#9CA3AF', fontFamily: 'Manrope, sans-serif' }}>
                {type.domain}
              </div>
              {type.models ? (
                <div className="grid grid-cols-2 gap-3">
                  {type.models.map((model) => (
                    <a
                      key={model.label}
                      href={model.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary inline-flex items-center justify-between gap-2"
                      style={{ fontSize: '15px', padding: '14px 20px' }}
                    >
                      <span>{model.label}</span>
                      <ArrowRight size={16} />
                    </a>
                  ))}
                </div>
              ) : type.placeholder ? (
                <button
                  type="button"
                  className="btn-secondary w-full"
                  style={{ fontSize: '15px', padding: '14px 20px', opacity: 0.7, cursor: 'default' }}
                >
                 Ver Exemplo (Em breve)
                </button>
              ) : (
                <a
                  href={type.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                  style={{ fontSize: '15px', padding: '14px 20px' }}
                >
                  Ver Exemplo
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
