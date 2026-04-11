import { ArrowRight, Globe, Bot, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const paths = [
  {
    icon: Globe,
    title: 'Quero um site',
    subtitle: 'Presença digital profissional que vende',
    cta: 'Começar →',
    href: 'https://wa.me/5500000000000?text=Olá!+Quero+um+site+profissional.',
    color: '#FF2DA3',
  },
  {
    icon: Bot,
    title: 'Quero automação',
    subtitle: 'IA de atendimento e processos automáticos',
    cta: 'Começar →',
    href: 'https://wa.me/5500000000000?text=Olá!+Quero+automatizar+meu+atendimento.',
    color: '#7C3AED',
  },
  {
    icon: TrendingUp,
    title: 'Quero crescer com IA',
    subtitle: 'Tráfego pago e conteúdo com inteligência artificial',
    cta: 'Começar →',
    href: 'https://wa.me/5500000000000?text=Olá!+Quero+crescer+com+IA.',
    color: '#10B981',
  },
]

export function CTAFinalSection() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,45,163,0.06) 0%, rgba(5,8,20,1) 40%, rgba(5,8,20,1) 60%, rgba(124,58,237,0.06) 100%)',
        backgroundColor: '#050814',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,45,163,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Top divider */}
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="container-inner relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={cn('mb-4 animate-on-scroll', inView && 'in-view')}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.1,
            }}
          >
            Pronto para{' '}
            <span className="gradient-text">estruturar seu negócio?</span>
          </h2>
          <p
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              color: '#9CA3AF',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Escolha por onde quer começar. Cada caminho leva ao mesmo resultado:{' '}
            <span style={{ color: '#E5E7EB' }}>uma operação digital que cresce com você.</span>
          </p>
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {paths.map((path, i) => {
            const Icon = path.icon
            return (
              <a
                key={path.title}
                href={path.href}
                className={cn(
                  'group glass-card p-8 flex flex-col items-center text-center no-underline animate-on-scroll',
                  `delay-${(i + 1) * 100}`,
                  inView && 'in-view',
                )}
                style={{ textDecoration: 'none' }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${path.color}20, ${path.color}10)`,
                    border: `1px solid ${path.color}30`,
                  }}
                >
                  <Icon size={28} style={{ color: path.color }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#F8FAFC',
                  }}
                >
                  {path.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="mb-6 flex-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6 }}
                >
                  {path.subtitle}
                </p>

                {/* CTA button */}
                <span
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                  style={{ color: path.color, fontFamily: 'Inter, sans-serif' }}
                >
                  {path.cta}
                  <ArrowRight size={15} />
                </span>
              </a>
            )
          })}
        </div>

        {/* WhatsApp main CTA */}
        <div className={cn('text-center animate-on-scroll delay-400', inView && 'in-view')}>
          <a
            href="https://wa.me/5500000000000?text=Olá!+Quero+saber+mais+sobre+a+Loja+Prática."
            className="btn-primary"
            style={{ fontSize: '17px', padding: '17px 40px' }}
          >
            Falar com um especialista agora
            <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
            Resposta em até 2 horas em horário comercial
          </p>
        </div>
      </div>
    </section>
  )
}
