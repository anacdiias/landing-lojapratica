import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

const testimonials = [
  {
    name: 'Gislayne Schlickmann',
    company: 'Loja Prática',
    segment: 'E-commerce',
    avatar: 'GS',
    avatarColor: '#FF2DA3',
    text: 'Tenho o meu site e-commerce com a loja prática faz um tempo já e eles sempre prestaram um ótimo atendimento!! O Willian é sempre muito prestativo e o suporte é muito rápido. Só tenho elogios à Loja Prática.',
    result: 'Suporte rápido e prestativo',
    stars: 5,
    time: '2 anos atrás',
  },
  {
    name: 'Stephany Guimaraes Gomes',
    company: 'Loja Prática',
    segment: 'E-commerce',
    avatar: 'SG',
    avatarColor: '#7C3AED',
    text: 'Minha experiência até o momento tem sido ótima. Sempre quando preciso o Willian me atende prontamente. Meu site é super prático e rápido! Não tenho nada a reclamar, pelo contrário, sempre sou bem atendida e de forma rápida. Espero que continue assim ☺️',
    result: 'Site prático e atendimento rápido',
    stars: 5,
    time: '2 anos atrás',
  },
  {
    name: 'Daniel Farias',
    company: 'Loja Prática',
    segment: 'Desenvolvimento de sites',
    avatar: 'DF',
    avatarColor: '#10B981',
    text: 'Os produtos e serviços ofertados possuem um excelente custo benefício. Tive alguns contratempos com esta empresa, mas a mesma estava em uma fase de transição. Mas tudo foi devidamente ajustado e hoje o atendimento está muito bom. Recomendo.',
    result: 'Recomendo após ajustes no atendimento',
    stars: 4,
    time: '1 ano atrás',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={`filled-${i}`} size={14} fill="#FF2DA3" style={{ color: '#FF2DA3' }} />
      ))}
      {[...Array(5 - count)].map((_, i) => (
        <Star key={`empty-${i}`} size={14} fill="none" style={{ color: '#4B5563' }} />
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
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className={cn('section-label mb-4 animate-on-scroll', inView && 'in-view')}>
            O que nossos clientes dizem
          </p>
          <h2
            className={cn('animate-on-scroll delay-100', inView && 'in-view')}
            style={{
              fontFamily: 'Sora, sans-serif',
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

        {/* Cartões de depoimento */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={cn('glass-card p-7 flex flex-col animate-on-scroll', `delay-${(i + 1) * 100}`, inView && 'in-view')}
            >
              {/* Avaliações */}
              <Stars count={t.stars} />

              {/* Texto */}
              <blockquote
                className="flex-1 mt-5 mb-6"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '15px',
                  color: '#9CA3AF',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </blockquote>

              {/* Selo de resultado */}
              <div
                className="inline-block mb-5 px-3 py-1.5 rounded-full text-xs font-medium self-start"
                style={{
                  background: 'rgba(255,45,163,0.10)',
                  border: '1px solid rgba(255,45,163,0.20)',
                  color: '#FF2DA3',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                ↑ {t.result}
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.avatarColor}88, ${t.avatarColor})` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: '#6B7280' }}>
                    {t.company} · {t.segment}
                  </div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: '#9CA3AF' }}>
                    {t.time}
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


