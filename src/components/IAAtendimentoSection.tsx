import { ArrowRight, Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'
import { ChatMockup } from './mockups/ChatMockup'

const benefits = [
  'Responde dúvidas automaticamente, qualquer hora do dia',
  'Qualifica leads antes de chegarem para você',
  'Integra com WhatsApp, Instagram e e-mail',
  'Histórico completo de conversas em painel único',
]

export function IAAtendimentoSection() {
  const { ref, inView } = useInView()

  return (
    <section
      id="como-funciona"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative section-padding overflow-hidden"
      style={{ background: '#050814' }}
    >
      {/* Glow */}
      <div className="glow-purple" style={{ width: '500px', height: '500px', right: '-100px', top: '50%', transform: 'translateY(-50%)' }} />

      <div className="container-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <div className={cn('badge-brand mb-6 animate-on-scroll', inView && 'in-view')}>
              Automação Inteligente
            </div>

            <h2
              className={cn('mb-6 animate-on-scroll delay-100', inView && 'in-view')}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#F8FAFC',
                lineHeight: 1.2,
              }}
            >
              Atendimento 24/7{' '}
              <br />
              <span className="gradient-text">sem contratar mais pessoas</span>
            </h2>

            <p
              className={cn('mb-8 animate-on-scroll delay-200', inView && 'in-view')}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                color: '#9CA3AF',
                lineHeight: 1.75,
              }}
            >
              Implantamos uma IA de atendimento que responde clientes, qualifica leads e resolve
              dúvidas frequentes — automaticamente, no WhatsApp, Instagram e e-mail.
              <br /><br />
              Você para de ficar refém do celular e começa a receber leads{' '}
              <span style={{ color: '#E5E7EB' }}>já qualificados, prontos para fechar.</span>
            </p>

            {/* Benefits list */}
            <ul className={cn('space-y-4 mb-10 animate-on-scroll delay-300', inView && 'in-view')}>
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,45,163,0.15)', border: '1px solid rgba(255,45,163,0.3)' }}
                  >
                    <Check size={11} style={{ color: '#FF2DA3' }} strokeWidth={3} />
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#E5E7EB', lineHeight: 1.6 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className={cn('animate-on-scroll delay-400', inView && 'in-view')}>
              <a
                href="https://wa.me/5500000000000?text=Olá!+Quero+automatizar+meu+atendimento."
                className="btn-primary"
              >
                Quero automatizar meu atendimento
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className={cn('flex justify-center lg:justify-end animate-on-scroll delay-200', inView && 'in-view')}>
            <div className="relative">
              {/* Glow behind chat */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255,45,163,0.1) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                  filter: 'blur(30px)',
                }}
              />
              <ChatMockup />

              {/* Floating stat badge */}
              <div
                className="absolute -right-4 -bottom-4 rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(10,14,26,0.95)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    89%
                  </span>
                  <div>
                    <div className="text-xs font-medium" style={{ color: '#E5E7EB', fontFamily: 'Inter, sans-serif' }}>
                      menos tempo
                    </div>
                    <div className="text-xs" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
                      no atendimento
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
