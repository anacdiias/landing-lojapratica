import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const testimonials = [
  {
    name: 'Marcos Oliveira',
    company: 'Distribuidora MegaStock',
    segment: 'Atacado / Distribuição',
    avatar: 'MO',
    avatarColor: '#FF2DA3',
    text: 'Antes da Loja Prática, eu perdia horas no WhatsApp respondendo as mesmas perguntas. Hoje a IA resolve isso sozinha e eu só fecho as vendas. Em 3 semanas já vi resultado direto no faturamento.',
    result: '+340% conversões',
  },
  {
    name: 'Ana Carvalho',
    company: 'Studio Beleza Pura',
    segment: 'Beleza / Estética',
    avatar: 'AC',
    avatarColor: '#7C3AED',
    text: 'O site ficou incrível — parece empresa grande mesmo. Em 15 dias depois de ir ao ar, já tínhamos clientes novos chegando pelo Google. O prazo foi cumprido e o atendimento foi impecável.',
    result: '3x mais agendamentos',
  },
  {
    name: 'Roberto Farias',
    company: 'RF Consultoria Contábil',
    segment: 'Contabilidade',
    avatar: 'RF',
    avatarColor: '#10B981',
    text: 'Finalmente tenho uma estrutura digital que funciona sem depender de mim o tempo todo. A automação de atendimento pagou o investimento sozinha no primeiro mês.',
    result: '89% menos tempo manual',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#FF2DA3" style={{ color: '#FF2DA3' }} />
      ))}
    </div>
  )
}

export function ProvasSocialSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="depoimentos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#0A0E1A' }}
    >
      <div className="absolute inset-0 bg-dots opacity-35" />

      <div className="container-inner relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className={cn('section-label mb-4 animate-on-scroll', inView && 'in-view')}>
            O que nossos clientes dizem
          </p>
          <h2
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(26px, 4vw, 44px)',
              fontWeight: 700,
              color: '#F8FAFC',
              lineHeight: 1.2,
            }}
          >
            Resultados reais de quem já{' '}
            <span className="gradient-text">estruturou o negócio</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={cn('glass-card p-7 flex flex-col animate-on-scroll', `delay-${(i + 1) * 100}`, inView && 'in-view')}
            >
              {/* Stars */}
              <Stars />

              {/* Text */}
              <blockquote
                className="flex-1 mt-5 mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#9CA3AF',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </blockquote>

              {/* Result badge */}
              <div
                className="inline-block mb-5 px-3 py-1.5 rounded-full text-xs font-medium self-start"
                style={{
                  background: 'rgba(255,45,163,0.10)',
                  border: '1px solid rgba(255,45,163,0.20)',
                  color: '#FF2DA3',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                ↑ {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.avatarColor}88, ${t.avatarColor})` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B7280' }}>
                    {t.company} · {t.segment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
